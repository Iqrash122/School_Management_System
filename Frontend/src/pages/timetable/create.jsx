import { useEffect, useState } from "react";

export default function TimeTableCreate() {
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const [classId, setClassId] = useState("");
  const [sectionId, setSectionId] = useState("");

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [days, setDays] = useState(
    daysOfWeek.map((d) => ({ day: d, lectures: [] }))
  );

  /* FETCH DROPDOWNS */
  useEffect(() => {
    fetch("http://localhost:5000/api/classes/show")
      .then((r) => r.json())
      .then((d) => setClasses(d.classes || d));

    fetch("http://localhost:5000/api/sections/show")
      .then((r) => r.json())
      .then((d) => setSections(d.sections || d));

    fetch("http://localhost:5000/api/subjects/get")
      .then((r) => r.json())
      .then(setSubjects);

    fetch("http://localhost:5000/api/teachers/get")
      .then((r) => r.json())
      .then(setTeachers);
  }, []);

  /* ADD LECTURE */
  const addLecture = (dayIndex) => {
    const updated = [...days];
    updated[dayIndex].lectures.push({
      subject: "",
      teacher: "",
      startTime: "",
      endTime: "",
    });
    setDays(updated);
  };

  /* UPDATE LECTURE */
  const updateLecture = (dayIndex, lecIndex, field, value) => {
    const updated = [...days];
    updated[dayIndex].lectures[lecIndex][field] = value;
    setDays(updated);
  };

  /* SUBMIT */
  const handleSubmit = async () => {
    if (!classId || !sectionId) {
      alert("Please select class and section");
      return;
    }

    // 🔥 CLEAN DATA
    const cleanedDays = days
      .map((d) => ({
        day: d.day,
        lectures: d.lectures.filter(
          (l) => l.subject && l.teacher && l.startTime && l.endTime
        ),
      }))
      .filter((d) => d.lectures.length > 0); // remove empty days

    if (cleanedDays.length === 0) {
      alert("Please add at least one lecture");
      return;
    }

    const payload = {
      class: classId,
      section: sectionId,
      days: cleanedDays,
    };

    console.log("FINAL TIMETABLE PAYLOAD:", payload);

    const res = await fetch("http://localhost:5000/api/timetable/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json();
      alert(err.message || "Error creating timetable");
      return;
    }

    alert("Time Table Created Successfully");
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-sm">
      <h2 className="text-xl font-bold mb-4">Create Class Time Table</h2>

      {/* CLASS + SECTION */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <select
          value={classId}
          onChange={(e) => setClassId(e.target.value)}
          className="px-4 py-3 bg-gray-100 rounded"
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
          className="px-4 py-3 bg-gray-100 rounded"
        >
          <option value="">Select Section</option>
          {sections.map((s) => (
            <option key={s._id} value={s._id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {/* DAYS */}
      {days.map((day, dayIndex) => (
        <div key={day.day} className="mb-6 border rounded-md p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">{day.day}</h3>

            <button
              onClick={() => addLecture(dayIndex)}
              className="px-4 py-1 border border-blue-600 text-blue-600 rounded"
            >
              + Add Lecture
            </button>
          </div>

          {day.lectures.map((lec, lecIndex) => (
            <div key={lecIndex} className="grid grid-cols-4 gap-3 mb-3">
              {/* SUBJECT */}
              <select
                value={lec.subject}
                onChange={(e) =>
                  updateLecture(dayIndex, lecIndex, "subject", e.target.value)
                }
                className="px-3 py-2 bg-gray-100 rounded"
              >
                <option value="">Subject</option>
                {subjects.map((s) => (
                  <option key={s._id} value={s._id}>
                    {s.name}
                  </option>
                ))}
              </select>

              {/* TEACHER */}
              <select
                value={lec.teacher}
                onChange={(e) =>
                  updateLecture(dayIndex, lecIndex, "teacher", e.target.value)
                }
                className="px-3 py-2 bg-gray-100 rounded"
              >
                <option value="">Teacher</option>
                {teachers.map((t) => (
                  <option key={t._id} value={t._id}>
                    {t.firstName} {t.lastName}
                  </option>
                ))}
              </select>

              {/* TIME */}
              <input
                type="time"
                value={lec.startTime}
                onChange={(e) =>
                  updateLecture(dayIndex, lecIndex, "startTime", e.target.value)
                }
                className="px-3 py-2 bg-gray-100 rounded"
              />

              <input
                type="time"
                value={lec.endTime}
                onChange={(e) =>
                  updateLecture(dayIndex, lecIndex, "endTime", e.target.value)
                }
                className="px-3 py-2 bg-gray-100 rounded"
              />
            </div>
          ))}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="px-10 py-3 bg-[#0A2540] text-white rounded-md"
      >
        Save Time Table
      </button>
    </div>
  );
}
