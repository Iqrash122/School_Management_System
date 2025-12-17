import SelectField from "../common/SelectField";

export default function ExamForm() {
  return (
    <div className="bg-white rounded-md shadow-sm p-6">
      <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* EXAM NAME */}
        <div>
          <label className="text-sm font-medium text-zinc-600">
            Exam Name *
          </label>
          <input
            type="text"
            placeholder="Mid Term / Final"
            className="
              mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
              text-sm outline-none focus:ring-2 focus:ring-[var(--secondary)]
            "
          />
        </div>

        {/* SUBJECT */}
        <SelectField
          label="Subject *"
          options={[
            { id: 1, name: "Mathematics" },
            { id: 2, name: "Physics" },
            { id: 3, name: "Chemistry" },
          ]}
        />

        {/* CLASS */}
        <SelectField
          label="Class *"
          options={[
            { id: 1, name: "8" },
            { id: 2, name: "9" },
            { id: 3, name: "10" },
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

        {/* DATE */}
        <div>
          <label className="text-sm font-medium text-zinc-600">
            Exam Date *
          </label>
          <input
            type="date"
            className="
              mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
              text-sm outline-none focus:ring-2 focus:ring-[var(--secondary)]
            "
          />
        </div>

        {/* TIME */}
        <div>
          <label className="text-sm font-medium text-zinc-600">
            Exam Time *
          </label>

          <div className="mt-2 grid grid-cols-2 gap-4">
            {/* FROM TIME */}
            <div>
              <input
                type="time"
                className="
                            mt-1 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
                            text-sm outline-none
                            focus:ring-2 focus:ring-[var(--secondary)]
                            "
              />
            </div>

            {/* TO TIME */}
            <div>
              <input
                type="time"
                className="
                                mt-1 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
                                text-sm outline-none
                                focus:ring-2 focus:ring-[var(--secondary)]
                                "
              />
            </div>
          </div>
        </div>

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
            placeholder="Additional notes about the exam"
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
            Save Exam
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
