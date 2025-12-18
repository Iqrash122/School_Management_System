export default function SelectField({ label, options, value, onChange }) {
  return (
    <div>
      <label className="text-sm font-medium text-zinc-600">{label}</label>

      <select
        value={value?.id || ""}
        onChange={(e) => onChange(options.find((o) => o.id === e.target.value))}
        className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
                   outline-none focus:ring-2 focus:ring-[var(--secondary)]"
      >
        <option value="">Select {label}</option>
        {options.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
