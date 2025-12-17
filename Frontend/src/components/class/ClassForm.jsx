import SelectField from "../common/SelectField";

export default function ClassForm() {
  return (
    <div className="bg-white rounded-md shadow-sm p-6">
      <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CLASS */}
        <SelectField
          label="Class *"
          options={[
            { id: 1, name: "1" },
            { id: 2, name: "2" },
            { id: 3, name: "3" },
            { id: 4, name: "4" },
            { id: 5, name: "5" },
            { id: 6, name: "6" },
            { id: 7, name: "7" },
            { id: 8, name: "8" },
            { id: 9, name: "9" },
            { id: 10, name: "10" },
          ]}
        />

        {/* SECTION */}
        <SelectField
          label="Section *"
          options={[
            { id: 1, name: "A" },
            { id: 2, name: "B" },
            { id: 3, name: "C" },
          ]}
        />

        {/* TEACHER */}
        <SelectField
          label="Class Teacher *"
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
            className="
              mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
              text-sm outline-none resize-none
              focus:ring-2 focus:ring-[var(--secondary)]
            "
            placeholder="Short description about this class"
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
            Save Class
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
