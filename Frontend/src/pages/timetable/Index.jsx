import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/breadCrums/breadcrums";

export default function TimeTableIndex() {
  const navigate = useNavigate();

  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);

  const [classId, setClassId] = useState("");
  const [sectionId, setSectionId] = useState("");

  const [table, setTable] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* FETCH CLASS & SECTION */
  useEffect(() => {
    fetch("http://localhost:5000/api/classes/show")
      .then((r) => r.json())
      .then((d) => setClasses(d.classes || d));

    fetch("http://localhost:5000/api/sections/show")
      .then((r) => r.json())
      .then((d) => setSections(d.sections || d));
  }, []);

  /* FETCH TIMETABLE */
  useEffect(() => {
    if (!classId || !sectionId) return;

    setLoading(true);
    setError("");
    setTable(null);

    fetch(`http://localhost:5000/api/timetable/get/${classId}/${sectionId}`)
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then(setTable)
      .catch(() => setError("No timetable found for selected class & section"))
      .finally(() => setLoading(false));
  }, [classId, sectionId]);

  return (
    <div>
      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-4">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/timetable/create")}
          className="
            px-12 py-3 rounded-md
            border-2 border-[var(--secondary)]
            font-semibold
            text-[var(--secondary)]
            transition cursor-pointer
            hover:bg-[var(--secondary)] hover:text-white
          "
        >
          Create Time Table
        </button>
      </div>

      {/* FILTER + TABLE */}
      <div className="bg-white rounded-md shadow-sm p-6">
        {/* FILTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <select
            value={classId}
            onChange={(e) => {
              setClassId(e.target.value);
              setSectionId(""); // reset section
            }}
            className="px-4 py-3 bg-gray-100 rounded-md"
          >
            <option value="">Select Class</option>
            {classes.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            value={sectionId}
            onChange={(e) => setSectionId(e.target.value)}
            disabled={!classId}
            className="px-4 py-3 bg-gray-100 rounded-md disabled:opacity-50"
          >
            <option value="">Select Section</option>
            {sections.map((s) => (
              <option key={s._id} value={s._id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        {/* STATES */}
        {!classId ||
          (!sectionId && (
            <p className="text-gray-500">Please select class and section</p>
          ))}

        {loading && <p>Loading timetable...</p>}

        {error && <p className="text-red-500">{error}</p>}

        {/* TIMETABLE */}
        {table && (
          <div>
            <h2 className="text-xl font-bold mb-4">
              Class {table.class?.name} – Section {table.section?.name}
            </h2>

            {table.days.map((day) => (
              <div key={day.day} className="mb-6">
                <h3 className="font-semibold text-lg mb-2">{day.day}</h3>

                <table className="w-full text-sm border">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 text-left">Time</th>
                      <th className="p-2 text-left">Subject</th>
                      <th className="p-2 text-left">Teacher</th>
                    </tr>
                  </thead>

                  <tbody>
                    {day.lectures.length === 0 ? (
                      <tr>
                        <td
                          colSpan="3"
                          className="p-3 text-center text-gray-500"
                        >
                          No lectures
                        </td>
                      </tr>
                    ) : (
                      day.lectures.map((lec, i) => (
                        <tr key={i} className="border-t">
                          <td className="p-2">
                            {lec.startTime} – {lec.endTime}
                          </td>
                          <td className="p-2">{lec.subject?.name}</td>
                          <td className="p-2">
                            {lec.teacher?.firstName} {lec.teacher?.lastName}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
