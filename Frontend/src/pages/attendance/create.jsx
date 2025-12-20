import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/breadCrums/breadcrums";
import AttendenceCreate from "../../components/attendance/AttendenceCreate";
import { getClasses, getSections } from "../../services/api";

/* ===============================
   ATTENDANCE CREATE PAGE
================================ */
export default function Create() {
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  const [date, setDate] = useState("");
  const [session, setSession] = useState("2024-2025");

  useEffect(() => {
    loadClasses();
  }, []);

  const loadClasses = async () => {
    const data = await getClasses();
    setClasses(data);
  };

  const loadSections = async (classId) => {
    const data = await getSections(classId); // class-wise sections (recommended)
    setSections(data);
  };

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <Breadcrumbs />
      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-md shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* CLASS */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Class
            </label>
            <select
              value={selectedClass}
              onChange={(e) => {
                setSelectedClass(e.target.value);
                setSelectedSection("");
                loadSections(e.target.value);
              }}
              className="w-full px-4 py-3 rounded-md bg-[#F3F4F6]"
            >
              <option value="">Select Class</option>
              {classes.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* SECTION */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Section
            </label>
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              disabled={!selectedClass}
              className="w-full px-4 py-3 rounded-md bg-[#F3F4F6]"
            >
              <option value="">Select Section</option>
              {sections.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* DATE */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-[#F3F4F6]"
            />
          </div>

          {/* SESSION */}
          <div>
            <label className="block text-sm font-medium mb-2">Session</label>
            <select
              value={session}
              onChange={(e) => setSession(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-[#F3F4F6]"
            >
              <option value="2023-2024">2023 - 2024</option>
              <option value="2024-2025">2024 - 2025</option>
            </select>
          </div>
        </div>
      </div>

      {/* STUDENT ATTENDANCE TABLE */}
      {selectedClass && selectedSection && date && (
        <AttendenceCreate
          classId={selectedClass}
          sectionId={selectedSection}
          date={date}
          session={session}
        />
      )}
    </div>
  );
}
