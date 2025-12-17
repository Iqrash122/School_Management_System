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
            className="
              w-full rounded-md bg-[#F3F4F6]
              px-4 py-3 text-left text-sm text-[var(--primary)]
              outline-none focus:ring-2 focus:ring-[var(--primary)]
            "
          >
            <span className="block truncate">
              {selected ? selected.name : `Please select ${label}`}
            </span>
          </ListboxButton>

          <ListboxOptions
            className="
              absolute z-20 mt-1 max-h-60 w-full overflow-auto
              rounded-md bg-white py-1 text-sm shadow-lg
              ring-1 ring-black/5
            "
          >
            {options.map((item) => (
              <ListboxOption
                key={item.id}
                value={item}
                className="
                  cursor-pointer px-4 py-2
                  text-[var(--primary)]
                  hover:bg-[var(--primary)]/10
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
export default function CreateForm({ mode = "student" }) {
  const [photoPreview, setPhotoPreview] = useState(null);

  return (
    <div className="bg-white rounded-md shadow-sm p-6">
      <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* registration number  */}
        {mode === "student" && (
          <div>
            <label className="text-sm font-medium text-zinc-600">
              Registration Number
            </label>
            <input
              className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
            text-sm outline-none focus:ring-2 focus:ring-[var(--secondary)]"
            />
          </div>
        )}

      
        {/* First Name */}
        <div>
          <label className="text-sm font-medium text-zinc-600">
            First Name *
          </label>
          <input
            type="text"
            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
            text-sm outline-none focus:ring-2 focus:ring-[var(--secondary)]"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="text-sm font-medium text-zinc-600">
            Last Name *
          </label>
          <input
            type="text"
            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
            text-sm outline-none focus:ring-2 focus:ring-[var(--secondary)]"
          />
        </div>

        {/* Gender */}
        <SelectField
          label="Gender *"
          options={[
            { id: 1, name: "Male" },
            { id: 2, name: "Female" },
          ]}
        />

        {/* DOB */}
        <div>
          <label className="text-sm font-medium text-zinc-600">
            Date Of Birth *
          </label>
          <input
            type="date"
            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
            text-sm outline-none focus:ring-2 focus:ring-[var(--secondary)]"
          />
        </div>

        {/* Roll */}
        {mode === "student" && (
          <div>
            <label className="text-sm font-medium text-zinc-600">
              Roll Number
            </label>
            <input
              className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
            text-sm outline-none focus:ring-2 focus:ring-[var(--secondary)]"
            />
          </div>
        )}

        {mode === "teacher" && (
          <div>
            <label className="text-sm font-medium text-zinc-600">
              ID Number
            </label>
            <input
              className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
            text-sm outline-none focus:ring-2 focus:ring-[var(--secondary)]]"
            />
          </div>
        )}

        {/* Blood Group */}
        <SelectField
          label="Blood Group *"
          options={[
            { id: 1, name: "A+" },
            { id: 2, name: "B+" },
            { id: 3, name: "O+" },
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

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-zinc-600">E-mail</label>
          <input
            type="email"
            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
            text-sm outline-none focus:ring-2 focus:ring-[var(--secondary)]"
          />
        </div>

        {/* Class */}
        <SelectField
          label="Class *"
          options={[
            { id: 1, name: "1" },
            { id: 2, name: "2" },
            { id: 3, name: "3" },
          ]}
        />

        {/* Section */}
        <SelectField
          label="Section *"
          options={[
            { id: 1, name: "A" },
            { id: 2, name: "B" },
          ]}
        />

        {/* BIO */}
        <div className="md:col-span-3">
          <label className="text-sm font-medium text-zinc-600">Short BIO</label>
          <textarea
            rows="8"
            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
            text-sm outline-none resize-none
            focus:ring-2 focus:ring-[var(--secondary)]"
          />
        </div>

        {/* PHOTO */}
        <div>
          <label className="text-sm font-medium text-zinc-600">
            Upload Student Photo
          </label>

          <label
            htmlFor="photo"
            className="
              mt-3 w-full h-44 border-2 border-dashed border-zinc-300
              rounded-md flex items-center justify-center cursor-pointer
              bg-[#F9FAFB] hover:border-[var(--secondary)]
              hover:bg-[#F1F7F5] transition overflow-hidden
            "
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
                  PNG, JPG • 150px × 150px
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

        {/* BUTTONS */}
        <div className="md:col-span-4 flex gap-4 mt-6">
          <button
            type="submit"
            className="px-10 py-3 rounded-md bg-[#0A2540]
            text-white font-semibold hover:opacity-90 transition"
          >
            Save
          </button>

          <button
            type="reset"
            className="px-10 py-3 rounded-md bg-[#0A2540]
            text-white font-semibold hover:opacity-90 transition"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
