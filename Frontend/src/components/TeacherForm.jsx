import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { useEffect, useState } from "react";

/* ---------- REUSABLE SELECT ---------- */
function SelectField({ label, options }) {
    const [selected, setSelected] = useState(null);

    return (
        <div>
            <label className="text-sm font-medium text-zinc-600">{label}</label>

            <Listbox value={selected} onChange={setSelected}>
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

    /* 🔹 NEW STATES */
    const [classes, setClasses] = useState([]);
    const [sections, setSections] = useState([]);

    /* 🔹 FETCH FROM API */
    useEffect(() => {
        fetch("http://localhost:5000/api/classes/show")
            .then((res) => res.json())
            .then((data) => setClasses(data))
            .catch(() => setClasses([]));

        fetch("http://localhost:5000/api/sections/show")
            .then((res) => res.json())
            .then((data) => setSections(data))
            .catch(() => setSections([]));
    }, []);

    return (
        <form action="" className="flex flex-row gap-6 flex-wrap">
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
                        <input className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]" />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="text-sm font-medium text-zinc-600">
                            Last Name *
                        </label>
                        <input className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]" />
                    </div>

                    {/* Specialization */}
                    <div>
                        <label className="text-sm font-medium text-zinc-600">
                            Specialization *
                        </label>
                        <input className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]" />
                    </div>

                    {/* Gender */}
                    <SelectField
                        label="Gender *"
                        options={[
                            { id: 1, name: "Male" },
                            { id: 2, name: "Female" },
                        ]}
                    />

                    {/* Religion */}
                    <SelectField
                        label="Religion *"
                        options={[
                            { id: 1, name: "Islam" },
                            { id: 2, name: "Christian" },
                            { id: 3, name: "Hindu" },
                        ]}
                    />

                    {/* DOB */}
                    <div>
                        <label className="text-sm font-medium text-zinc-600">
                            Date Of Birth
                        </label>
                        <input
                            type="date"
                            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]"
                        />
                    </div>

                    {/* ✅ CLASS FROM API */}
                    <SelectField label="Class" options={classes} />

                    <SelectField label="Section" options={sections} />

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
            </div>

            {/* RIGHT SIDE SAME */}
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
