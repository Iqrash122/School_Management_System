import { useEffect, useState } from "react";
import SubjectSelect from "./SubjectSelect";
import { useNavigate } from "react-router-dom";

export default function SubjectForm({ editData }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    type: "",
    class: "",
    section: "",
    teacher: "",
    description: "",
  });

  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [teachers, setTeachers] = useState([]);

  /* PREFILL */
  useEffect(() => {
    if (editData) {
      setForm({
        name: editData.name,
        type: editData.type,
        class: editData.class?._id,
        section: editData.section?._id,
        teacher: editData.teacher?._id,
        description: editData.description || "",
      });
    }
  }, [editData]);

  /* FETCH DROPDOWNS */
  useEffect(() => {
    fetch("http://localhost:5000/api/classes/show")
      .then((r) => r.json())
      .then((d) => setClasses(d.classes || d));

    fetch("http://localhost:5000/api/sections/show")
      .then((r) => r.json())
      .then((d) => setSections(d.sections || d));

    fetch("http://localhost:5000/api/teachers/get")
      .then((r) => r.json())
      .then(setTeachers);
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.type || !form.class || !form.teacher) {
    alert("Please fill all required fields");
    return;
  }

  // ✅ IMPORTANT: clean payload
  const payload = { ...form };

  if (!payload.section) {
    delete payload.section; // 👈 THIS FIXES THE ERROR
  }

  console.log("SUBJECT PAYLOAD:", payload);

  const url = editData
    ? `http://localhost:5000/api/subjects/update/${editData._id}`
    : "http://localhost:5000/api/subjects/create";

  const method = editData ? "PUT" : "POST";

  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.json();
    alert(err.message || "Error saving subject");
    return;
  }

  navigate("/subjects");
};

  return (
    <div className="bg-white rounded-md shadow-sm p-6">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <input
          placeholder="Subject Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="px-4 py-3 bg-[#F3F4F6] rounded-md"
        />

        <SubjectSelect
          label="Type"
          value={form.type}
          options={[
            { _id: "Core", name: "Core" },
            { _id: "Optional", name: "Optional" },
          ]}
          onChange={(v) => setForm({ ...form, type: v })}
        />

        <SubjectSelect
          label="Class"
          value={form.class}
          options={classes}
          onChange={(v) => setForm({ ...form, class: v })}
        />

        <SubjectSelect
          label="Section"
          value={form.section}
          options={sections}
          onChange={(v) => setForm({ ...form, section: v })}
        />

        <SubjectSelect
          label="Teacher"
          value={form.teacher}
          options={teachers.map((t) => ({
            _id: t._id,
            name: `${t.firstName} ${t.lastName}`,
          }))}
          onChange={(v) => setForm({ ...form, teacher: v })}
        />

        <textarea
          className="md:col-span-3 px-4 py-3 bg-[#F3F4F6] rounded-md"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <div className="md:col-span-3 flex gap-4">
          <button className="px-12 py-3 bg-[#0A2540] text-white rounded-md">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
