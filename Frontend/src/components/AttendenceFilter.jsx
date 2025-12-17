import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

/* ===============================
   REUSABLE DROPDOWN
================================ */
function FilterSelect({ label, options, placeholder }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-zinc-700 mb-2">
        {label}
      </label>

      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <ListboxButton
            className="
              w-full rounded-md bg-[#F3F4F6]
              px-4 py-3 text-left text-sm text-zinc-600
              outline-none
              focus:ring-2 focus:ring-[var(--secondary)]
            "
          >
            <span className="block truncate">
              {selected ? selected.name : placeholder}
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
                  text-zinc-700
                  hover:bg-[var(--secondary)]/10
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

/* ===============================
   ATTENDANCE FILTER BAR
================================ */
export default function AttendenceFilter() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* CLASS */}
        <FilterSelect
          label="Select Class"
          placeholder="Select Class"
          options={[
            { id: 1, name: "1" },
            { id: 2, name: "2" },
            { id: 3, name: "3" },
            { id: 4, name: "4" },
            { id: 5, name: "5" },
          ]}
        />

        {/* SECTION */}
        <FilterSelect
          label="Select Section"
          placeholder="Select Section"
          options={[
            { id: 1, name: "A" },
            { id: 2, name: "B" },
            { id: 3, name: "C" },
          ]}
        />

        {/* MONTH */}
        <FilterSelect
          label="Select Month"
          placeholder="Select Month"
          options={[
            { id: 1, name: "January" },
            { id: 2, name: "February" },
            { id: 3, name: "March" },
            { id: 4, name: "April" },
            { id: 5, name: "May" },
            { id: 6, name: "June" },
            { id: 7, name: "July" },
            { id: 8, name: "August" },
            { id: 9, name: "September" },
            { id: 10, name: "October" },
            { id: 11, name: "November" },
            { id: 12, name: "December" },
          ]}
        />

        {/* SESSION */}
        <FilterSelect
          label="Select Session"
          placeholder="Select Session"
          options={[
            { id: 1, name: "2023 - 2024" },
            { id: 2, name: "2024 - 2025" },
          ]}
        />
      </div>
    </div>
  );
}
