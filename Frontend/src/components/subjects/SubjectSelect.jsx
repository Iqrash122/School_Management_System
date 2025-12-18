import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

export default function SubjectSelect({
  label,
  options = [],
  value,
  onChange,
}) {
  const selected = options.find((o) => o._id === value) || null;

  return (
    <div>
      <label className="text-sm font-medium text-zinc-600">{label}</label>

      <Listbox value={selected} onChange={(val) => onChange(val._id)}>
        <div className="relative mt-2">
          <ListboxButton
            className="
              w-full rounded-md bg-[#F3F4F6]
              px-4 py-3 text-left text-sm text-[var(--primary)]
              outline-none focus:ring-2 focus:ring-[var(--secondary)]
            "
          >
            {selected ? selected.name : `Select ${label}`}
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
                key={item._id}
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
