import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { useEffect, useState } from "react";

/* ---------- REUSABLE SELECT ---------- */
function SelectField({ label, options = [], value, onChange }) {
  const selected = options.find((o) => o.name === value) || null;

    return (
        <div>
            <label className="text-sm font-medium text-zinc-600">{label}</label>

      <Listbox value={selected} onChange={(val) => onChange(val.name)}>
        <div className="relative mt-2">
          <ListboxButton className="w-full rounded-md bg-[#F3F4F6] px-4 py-3 text-left text-sm text-(--primary) outline-none focus:ring-2 focus:ring-(--primary)">
            <span className="block truncate">
              {selected ? selected.name : `Please select ${label}`}
            </span>
          </ListboxButton>

                    <ListboxOptions className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black/5">
                        {options.map((item) => (
                            <ListboxOption
                                key={item._id || item.id}
                                value={item}
                                className="cursor-pointer px-4 py-2 text-(--primary) hover:bg-(--primary)/10"
                            >
                                {item.name}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    );
}

/* ---------- MAIN FORM ---------- */
export default function CreateForm({ editData }) {
    const [photoPreview, setPhotoPreview] = useState(null);

  /* 🔹 FORM STATE */
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    specialization: "",
    gender: "",
    religion: "",
    dob: "",
    class: "",
    section: "",
    bio: "",
    photo: "",
  });

  /* 🔹 DROPDOWNS */
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);

  /* 🔹 PREFILL (UPDATE MODE) */
  useEffect(() => {
    if (editData) {
      setForm({
        firstName: editData.firstName || "",
        lastName: editData.lastName || "",
        specialization: editData.specialization || "",
        gender: editData.gender || "",
        religion: editData.religion || "",
        dob: editData.dob || "",
        class: editData.class || "",
        section: editData.section || "",
        bio: editData.bio || "",
        photo: editData.photo || "",
      });
      setPhotoPreview(editData.photo || null);
    }
  }, [editData]);

  /* 🔹 FETCH CLASS & SECTION */
  useEffect(() => {
    fetch("http://localhost:5000/api/classes/show")
      .then((res) => res.json())
      .then((data) => setClasses(data.classes || data))
      .catch(() => setClasses([]));

    fetch("http://localhost:5000/api/sections/show")
      .then((res) => res.json())
      .then((data) => setSections(data.sections || data))
      .catch(() => setSections([]));
  }, []);

  /* 🔹 INPUT CHANGE */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* 🔹 SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editData
      ? `http://localhost:5000/api/teachers/update/${editData._id}`
      : "http://localhost:5000/api/teachers/create";

    const method = editData ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    console.log("Teacher response:", await res.json());

    if (res.ok) {
      alert("Teacher Saved Successfully");
    } else {
      alert("Error while saving teacher");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-6 flex-wrap">
      {/* ================= LEFT ================= */}
      <div className="bg-white rounded-md shadow-sm p-6 w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ID */}
          <div>
            <label className="text-sm font-medium text-zinc-600">
              ID Number *
            </label>
            <input
              value={editData?.idNumber || "Auto Generated"}
              disabled
              className="mt-2 w-full px-4 py-3 rounded-md bg-[#E5E7EB] text-sm cursor-not-allowed"
            />
          </div>

          {/* First Name */}
          <div>
            <label className="text-sm font-medium text-zinc-600">
              First Name *
            </label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm font-medium text-zinc-600">
              Last Name *
            </label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]"
            />
          </div>

          {/* Specialization */}
          <div>
            <label className="text-sm font-medium text-zinc-600">
              Specialization *
            </label>
            <input
              name="specialization"
              value={form.specialization}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]"
            />
          </div>

          {/* Gender */}
          <SelectField
            label="Gender *"
            options={[
              { id: 1, name: "Male" },
              { id: 2, name: "Female" },
            ]}
            value={form.gender}
            onChange={(v) => setForm({ ...form, gender: v })}
          />

          {/* Religion */}
          <SelectField
            label="Religion *"
            options={[
              { id: 1, name: "Islam" },
              { id: 2, name: "Christian" },
              { id: 3, name: "Hindu" },
            ]}
            value={form.religion}
            onChange={(v) => setForm({ ...form, religion: v })}
          />

          {/* DOB */}
          <div>
            <label className="text-sm font-medium text-zinc-600">
              Date Of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]"
            />
          </div>

          {/* Class */}
          <SelectField
            label="Class"
            options={classes}
            value={form.class}
            onChange={(v) => setForm({ ...form, class: v })}
          />

          {/* Section */}
          <SelectField
            label="Section"
            options={sections}
            value={form.section}
            onChange={(v) => setForm({ ...form, section: v })}
          />

          {/* BUTTONS */}
          <div className="md:col-span-3 flex gap-4 mt-6 justify-between items-end">
            <span className="text-red-500 text-[12px] font-bold">
              Fields marked with (*) are required !
            </span>

            <div className="flex gap-3">
              <button
                type="submit"
                className="px-10 py-3 rounded-md bg-[#0A2540] text-white"
              >
                Save
              </button>
              <button
                type="reset"
                className="px-10 py-3 rounded-md bg-[#0A2540] text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="bg-white rounded-md shadow-sm p-6 flex-1">
        <label className="text-sm font-medium text-zinc-600">
          Upload Avatar
        </label>

                <label className="mt-3 w-full h-34 border-2 border-dashed border-zinc-300 rounded-md flex items-center justify-center cursor-pointer bg-[#F9FAFB]">
                    {photoPreview ? (
                        <img src={photoPreview} className="w-full h-full object-cover" />
                    ) : (
                        <p className="text-sm text-zinc-500">Click to upload</p>
                    )}

          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const url = URL.createObjectURL(file);
                setPhotoPreview(url);
                setForm({ ...form, photo: url });
              }
            }}
          />
        </label>

        <div className="mt-4">
          <label className="text-sm font-medium text-zinc-600">Bio</label>
          <textarea
            rows="7"
            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]"
          />
        </div>
      </div>
    </form>
  );
}
