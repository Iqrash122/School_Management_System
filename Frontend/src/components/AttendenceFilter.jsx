// components/AttendenceFilter.jsx
import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { getClasses, getSections } from "../services/api"; // API calls
import { useEffect } from "react";

function FilterSelect({ label, value, onChange, options, placeholder }) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-zinc-700 mb-2">
        {label}
      </label>
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton className="w-full rounded-md bg-[#F3F4F6] px-4 py-3 text-left text-sm text-zinc-600 outline-none focus:ring-2 focus:ring-[var(--secondary)]">
            <span className="block truncate">
              {value ? value.name : placeholder}
            </span>
          </ListboxButton>
          <ListboxOptions className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black/5">
            {options.map((item) => (
              <ListboxOption
                key={item._id || item.id}
                value={item}
                className="cursor-pointer px-4 py-2 text-zinc-700 hover:bg-[var(--secondary)]/10"
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

export default function AttendenceFilter({ onFilterChange }) {
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);

  const months = [
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
  ];

  const sessions = [
    { id: 1, name: "2023 - 2024" },
    { id: 2, name: "2024 - 2025" },
  ];

  useEffect(() => {
    // Load classes
    const loadClasses = async () => {
      const data = await getClasses();
      setClasses(data || []);
    };
    loadClasses();
  }, []);

  useEffect(() => {
    // Load sections when class selected
    const loadSections = async () => {
      if (selectedClass?._id) {
        const data = await getSections(selectedClass._id);
        setSections(data || []);
      } else {
        setSections([]);
      }
      setSelectedSection(null); // reset section
    };
    loadSections();
  }, [selectedClass]);

  // Notify parent whenever filters change
  useEffect(() => {
    onFilterChange({
      classId: selectedClass?._id,
      sectionId: selectedSection?._id,
      month: selectedMonth?.id,
      session: selectedSession?.name,
    });
  }, [
    selectedClass,
    selectedSection,
    selectedMonth,
    selectedSession,
    onFilterChange,
  ]);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <FilterSelect
          label="Select Class"
          value={selectedClass}
          onChange={setSelectedClass}
          options={classes}
          placeholder="Select Class"
        />
        <FilterSelect
          label="Select Section"
          value={selectedSection}
          onChange={setSelectedSection}
          options={sections}
          placeholder="Select Section"
        />
        <FilterSelect
          label="Select Month"
          value={selectedMonth}
          onChange={setSelectedMonth}
          options={months}
          placeholder="Select Month"
        />
        <FilterSelect
          label="Select Session"
          value={selectedSession}
          onChange={setSelectedSession}
          options={sessions}
          placeholder="Select Session"
        />
      </div>
    </div>
  );
}
