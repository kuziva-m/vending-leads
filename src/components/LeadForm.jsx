const LeadForm = ({ title, fields }) => (
  <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-2xl border border-dark/5">
    <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
    <form className="space-y-4">
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-bold mb-1 ml-1 capitalize">
            {field.label}
          </label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary outline-none transition-colors"
          />
        </div>
      ))}
      <button className="w-full bg-dark text-white font-bold py-4 rounded-xl hover:bg-primary transition-colors">
        Submit Inquiry
      </button>
    </form>
  </div>
);
