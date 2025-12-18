import { useEffect, useState } from "react";
import SelectField from "../common/SelectField";

export default function ClassForm({ onSubmit, initialData = {} }) {
  const [className, setClassName] = useState(initialData.name || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [section, setSection] = useState(initialData.section || null);
  const [sections, setSections] = useState([]);

  // 🔥 FETCH SECTIONS
  useEffect(() => {
    const fetchSections = async () => {
      const res = await fetch("http://localhost:5000/api/sections/show");
      const data = await res.json();
      setSections(
        data.map((s, index) => ({
          id: s._id,
          name: s.section_name,
        }))
      );
    };
    fetchSections();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!className || !section) {
      alert("Class name & section are required");
      return;
    }

    onSubmit({
      name: className,
      section_id: section.id,
      section_name: section.name,
      description,
    });
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-6">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* CLASS NAME */}
        <div>
          <label className="text-sm font-medium text-zinc-600">
            Class Name *
          </label>
          <input
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
                       outline-none focus:ring-2 focus:ring-[var(--secondary)]"
            placeholder="Enter class name"
          />
        </div>

        {/* SECTION */}
        <SelectField
          label="Section *"
          options={sections}
          value={section}
          onChange={setSection}
        />

        {/* DESCRIPTION */}
        <div className="md:col-span-3">
          <label className="text-sm font-medium text-zinc-600">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
                       outline-none focus:ring-2 focus:ring-[var(--secondary)]"
          />
        </div>

        {/* BUTTON */}
        <div className="md:col-span-3">
          <button
            type="submit"
            className="px-12 py-3 rounded-md border border-[var(--secondary)]
                       text-[var(--secondary)] font-semibold
                       hover:bg-[var(--secondary)] hover:text-white
                       transition-all active:scale-95"
          >
            Save Class
          </button>
        </div>
      </form>
    </div>
  );
}
