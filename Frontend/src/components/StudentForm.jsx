import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useEffect, useState } from "react";

/* ---------- SELECT FIELD ---------- */
function SelectField({ label, options, value, onChange }) {
  return (
    <div>
      <label className="text-sm font-medium text-zinc-600">{label}</label>

      <Listbox value={value} onChange={onChange}>
        <div className="relative mt-2">
          <ListboxButton className="w-full rounded-md bg-[#F3F4F6] px-4 py-3 text-left text-sm outline-none focus:ring-2 focus:ring-(--secondary)">
            <span className="block truncate">
              {value ? value.name : `Please select ${label}`}
            </span>
          </ListboxButton>

          <ListboxOptions className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black/5">
            {options.map((item) => (
              <ListboxOption
                key={item.id}
                value={item}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
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

/* ---------- STUDENT FORM ---------- */
export default function StudentForm({
  mode = "student",
  type = "create",
  initialData = null,
}) {
  /* STATES (ALL FIELDS) */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(null);
  const [dob, setDob] = useState("");

  const [rollNumber, setRollNumber] = useState("");
  const [stuCnic, setStuCnic] = useState("");
  const [fName, setFName] = useState("");
  const [fCnic, setFCnic] = useState("");
  const [fNumber, setFNumber] = useState("");

  const [bloodGroup, setBloodGroup] = useState(null);
  const [religion, setReligion] = useState(null);
  const [bio, setBio] = useState("");

  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  const [photoPreview, setPhotoPreview] = useState(null);

  useEffect(() => {
    if (type === "update" && initialData) {
      setFirstName(initialData.firstName || "");
      setLastName(initialData.lastName || "");
      setGender(initialData.gender ? { name: initialData.gender } : null);
      setDob(
        initialData.dateOfBirth ? initialData.dateOfBirth.split("T")[0] : ""
      );

      setRollNumber(initialData.rollNumber || "");
      setStuCnic(initialData.StuCnic || "");
      setFName(initialData.fName || "");
      setFCnic(initialData.fCnic || "");
      setFNumber(initialData.fNumber || "");

      setBloodGroup(
        initialData.bloodGroup ? { name: initialData.bloodGroup } : null
      );
      setReligion(initialData.religion ? { name: initialData.religion } : null);

      setBio(initialData.bio || "");

      setSelectedClass(initialData.class ? { name: initialData.class } : null);
      setSelectedSection(
        initialData.section ? { name: initialData.section } : null
      );

      setPhotoPreview(initialData.photo || null);
    }
  }, [type, initialData]);

  /* OPTIONS */
  const [classOptions, setClassOptions] = useState([]);
  const [sectionOptions, setSectionOptions] = useState([]);

  /* STATIC OPTIONS */
  const genderOptions = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
  ];
  const bloodOptions = [
    { id: 1, name: "A+" },
    { id: 2, name: "B+" },
    { id: 3, name: "O+" },
  ];
  const religionOptions = [
    { id: 1, name: "Islam" },
    { id: 2, name: "Christian" },
    { id: 3, name: "Hindu" },
  ];

  /* 🔥 FETCH CLASS & SECTION */
  useEffect(() => {
    fetch("http://localhost:5000/api/classes/show")
      .then((res) => res.json())
      .then((data) =>
        setClassOptions(data.map((c) => ({ id: c._id, name: c.name })))
      );

    fetch("http://localhost:5000/api/sections/show")
      .then((res) => res.json())
      .then((data) =>
        setSectionOptions(
          data.map((s) => ({ id: s._id, name: s.section_name }))
        )
      );
  }, []);

  /* 🔥 SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !gender ||
      !dob ||
      !selectedClass ||
      !selectedSection ||
      !bloodGroup ||
      !religion
    ) {
      alert("❌ Please fill all required fields");
      return;
    }

    const payload = {
      firstName,
      lastName,
      gender: gender.name,
      dateOfBirth: new Date(dob),
      rollNumber,
      StuCnic: stuCnic,
      fName,
      fCnic,
      fNumber,
      class: selectedClass.id,
      section: selectedSection.id,
      bloodGroup: bloodGroup.name,
      religion: religion.name,
      bio,
      photo: photoPreview || "",
    };

    const url =
      type === "create"
        ? "http://localhost:5000/api/students/create"
        : `http://localhost:5000/api/students/update/${initialData._id}`;

    const method = type === "create" ? "POST" : "PUT";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      alert("❌ " + data.message);
      return;
    }

    alert(
      type === "create"
        ? "✅ Student created successfully"
        : "✅ Student updated successfully"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-6 flex-wrap">
      <div className="bg-white rounded-md shadow-sm p-6 w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* REGISTRATION (AUTO) */}
        <input
          disabled
          placeholder="Registration auto-generated"
          className="bg-gray-200 px-4 py-3 rounded-md"
          hidden={type === "update"}
        />

        <Input label="First Name *" value={firstName} setValue={setFirstName} />
        <Input label="Last Name *" value={lastName} setValue={setLastName} />

        <SelectField
          label="Gender *"
          options={genderOptions}
          value={gender}
          onChange={setGender}
        />
        <Input
          type="date"
          label="Date Of Birth *"
          value={dob}
          setValue={setDob}
        />

        <Input
          label="Roll Number"
          value={rollNumber}
          setValue={setRollNumber}
        />
        <Input label="CNIC Number" value={stuCnic} setValue={setStuCnic} />
        <Input label="Father Name" value={fName} setValue={setFName} />
        <Input label="Father CNIC" value={fCnic} setValue={setFCnic} />
        <Input label="Father Phone" value={fNumber} setValue={setFNumber} />

        <SelectField
          label="Class *"
          options={classOptions}
          value={selectedClass}
          onChange={setSelectedClass}
        />
        <SelectField
          label="Section *"
          options={sectionOptions}
          value={selectedSection}
          onChange={setSelectedSection}
        />

        <SelectField
          label="Blood Group *"
          options={bloodOptions}
          value={bloodGroup}
          onChange={setBloodGroup}
        />
        <SelectField
          label="Religion *"
          options={religionOptions}
          value={religion}
          onChange={setReligion}
        />

        <div className="md:col-span-3 flex gap-4 mt-6 justify-between items-end">
          <span className="text-red-500 text-[12px] font-bold">
            Fields marked with (*) are required !
          </span>

          <div className="flex gap-3">
            <button className="px-10 py-3 rounded-md bg-[#0A2540] text-white">
              Save
            </button>
            <button className="px-10 py-3 rounded-md bg-[#0A2540] text-white">
              Cancel
            </button>
          </div>
        </div>
      </div>
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
            onChange={(e) =>
              setPhotoPreview(URL.createObjectURL(e.target.files[0]))
            }
          />
        </label>

        <div className="md:col-span-4">
          <label className="text-sm font-medium text-zinc-600"> BIO</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows="4"
            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]"
          />
        </div>
      </div>
    </form>
  );
}

/* ---------- INPUT ---------- */
function Input({ label, value, setValue, type = "text" }) {
  return (
    <div>
      <label className="text-sm font-medium text-zinc-600">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]"
      />
    </div>
  );
}
