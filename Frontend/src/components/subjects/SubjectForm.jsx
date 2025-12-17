import SubjectSelect from "./SubjectSelect";

export default function SubjectForm() {
  return (
    <div className="bg-white rounded-md shadow-sm p-6">
      <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* SUBJECT NAME */}
        <div>
          <label className="text-sm font-medium text-zinc-600">
            Subject Name *
          </label>
          <input
            type="text"
            placeholder="e.g Mathematics"
            className="
              mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
              text-sm outline-none focus:ring-2 focus:ring-[var(--secondary)]
            "
          />
        </div>

        {/* SUBJECT TYPE */}
        <SubjectSelect
          label="Subject Type *"
          options={[
            { id: 1, name: "Core" },
            { id: 2, name: "Optional" },
          ]}
        />

        {/* CLASS */}
        <SubjectSelect
          label="Class *"
          options={[
            { id: 1, name: "6" },
            { id: 2, name: "7" },
            { id: 3, name: "8" },
            { id: 4, name: "9" },
            { id: 5, name: "10" },
          ]}
        />

        {/* SECTION */}
        <SubjectSelect
          label="Section *"
          options={[
            { id: 1, name: "A" },
            { id: 2, name: "B" },
            { id: 3, name: "C" },
          ]}
        />

        {/* TEACHER */}
        <SubjectSelect
          label="Teacher *"
          options={[
            { id: 1, name: "Ali Khan" },
            { id: 2, name: "Sara Ahmed" },
            { id: 3, name: "Usman Raza" },
          ]}
        />

        {/* DESCRIPTION */}
        <div className="md:col-span-3">
          <label className="text-sm font-medium text-zinc-600">
            Description (Optional)
          </label>
          <textarea
            rows="4"
            placeholder="Short subject description"
            className="
              mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
              text-sm outline-none resize-none
              focus:ring-2 focus:ring-[var(--secondary)]
            "
          />
        </div>

        {/* BUTTONS */}
        <div className="md:col-span-3 flex gap-4 mt-4">
          <button
            type="submit"
            className="
              px-12 py-3 rounded-md bg-[#0A2540]
              text-white font-semibold hover:opacity-90 transition
            "
          >
            Save Subject
          </button>

          <button
            type="reset"
            className="
              px-12 py-3 rounded-md bg-[#0A2540]
              text-white font-semibold hover:opacity-90 transition
            "
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
