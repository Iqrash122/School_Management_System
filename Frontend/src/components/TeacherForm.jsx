import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";

/* ---------- REUSABLE SELECT ---------- */
function SelectField({ label, options }) {
    const [selected, setSelected] = useState(null);

    return (
        <div>
            <label className="text-sm font-medium text-zinc-600">{label}</label>

            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-2">
                    <ListboxButton
                        className="w-full rounded-md bg-[#F3F4F6] px-4 py-3 text-left text-sm text-(--primary) outline-none focus:ring-2 focus:ring-(--primary)"
                    >
                        <span className="block truncate">
                            {selected ? selected.name : `Please select ${label}`}
                        </span>
                    </ListboxButton>

                    <ListboxOptions
                        className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black/5"
                    >
                        {options.map((item) => (
                            <ListboxOption
                                key={item.id}
                                value={item}
                                className="cursor-pointer px-4 py-2 text-(--primary) hover:bg-(--primary)/10
                "
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
export default function CreateForm() {
    const [photoPreview, setPhotoPreview] = useState(null);

    return (
        <form action="" className="flex flex-row gap-6 flex-wrap">
            <div className="bg-white rounded-md shadow-sm p-6 w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="text-sm font-medium text-zinc-600">
                            ID Number *
                        </label>
                        <input
                            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6] text-sm outline-none focus:ring-2 focus:ring-(--secondary)]"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-zinc-600">
                            First Name *
                        </label>
                        <input
                            type="text"
                            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6] text-sm outline-none focus:ring-2 focus:ring-(--secondary)"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-zinc-600">
                            Last Name *
                        </label>
                        <input
                            type="text"
                            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6] text-sm outline-none focus:ring-2 focus:ring-(--secondary)"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-zinc-600">
                            Specialization *
                        </label>
                        <input
                            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6] text-sm outline-none focus:ring-2 focus:ring-(--secondary)"
                        />
                    </div>

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
                        <input type="date" className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6] text-sm outline-none focus:ring-2 focus:ring-(--secondary)"
                        />
                    </div>

                    {/* Class */}
                    <SelectField
                        label="Class "
                        options={[
                            { id: 1, name: "1" },
                            { id: 2, name: "2" },
                            { id: 3, name: "3" },
                        ]}
                    />

                    {/* Section */}
                    <SelectField
                        label="Section "
                        options={[
                            { id: 1, name: "A" },
                            { id: 2, name: "B" },
                        ]}
                    />

                    {/* BUTTONS */}
                    <div className="md:col-span-3 flex gap-4 mt-6 justify-between items-end">
                        <div className="text flex items-center gap-1 justify-center">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block align-middle"
                            >
                                <circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="2" fill="none" />
                                <line x1="12" y1="7" x2="12" y2="13" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="12" cy="17" r="1.5" fill="#EF4444" />
                            </svg>
                            <span className="text-red-500 font-bold text-[12px]" >
                                Fields marked with (*) are required !</span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                type="submit"
                                className="px-10 py-3 rounded-md bg-[#0A2540] cursor-pointer text-white font-semibold hover:opacity-90 transition"
                            >
                                Save
                            </button>

                            <button
                                type="reset"
                                className="px-10 py-3 rounded-md bg-[#0A2540] cursor-pointer text-white font-semibold hover:opacity-90 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-md shadow-sm p-6 flex-1">

                {/* PHOTO */}
                <div>
                    <label className="text-sm font-medium text-zinc-600">
                        Upload Avatar
                    </label>

                    <label
                        htmlFor="photo"
                        className="mt-3 w-full h-34 border-2 border-dashed border-zinc-300 rounded-md flex items-center justify-center cursor-pointer bg-[#F9FAFB] hover:border-(--secondary) hover:bg-[#F1F7F5] transition overflow-hidden"
                    >
                        {photoPreview ? (
                            <img
                                src={photoPreview}
                                alt="Preview"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="text-center">
                                <p className="text-sm text-zinc-600">
                                    Click to upload or drag & drop
                                </p>
                                <p className="text-xs text-zinc-400 mt-1">
                                    PNG, JPG, JPEG, SVG
                                </p>
                            </div>
                        )}

                        <input
                            id="photo"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    setPhotoPreview(URL.createObjectURL(file));
                                }
                            }}
                        />
                    </label>
                </div>

                {/* BIO */}
                <div className="md:col-span-3 mt-3">
                    <label className="text-sm font-medium text-zinc-600">Bio</label>
                    <textarea
                        rows="7"
                        className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6] text-sm outline-none resize-none focus:ring-2 focus:ring-(--secondary)"
                    />
                </div>
            </div>
        </form>
    );
}
