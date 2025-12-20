import { useEffect, useState } from "react";
import { getStudentsByClassSection, markAttendance } from "../../services/api";

export default function AttendenceCreate({
  classId,
  sectionId,
  date,
  session,
}) {
  const [students, setStudents] = useState([]);
  const [records, setRecords] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!classId || !sectionId) return;
    loadStudents();
  }, [classId, sectionId]);

  const loadStudents = async () => {
    setLoading(true);

    console.log("Fetching students for:", classId, sectionId);

    const data = await getStudentsByClassSection(classId, sectionId);

    console.log("STUDENTS:", data);

    setStudents(data || []);

    const map = {};
    (data || []).forEach((s) => {
      map[s._id] = "present";
    });
    setRecords(map);

    setLoading(false);
  };

  if (loading) {
    return <div className="mt-6 text-zinc-500">Loading students...</div>;
  }

  if (students.length === 0) {
    return (
      <div className="mt-6 text-red-500">
        No students found for this class & section
      </div>
    );
  }

  return (
    <div className="bg-white rounded-md p-6 mt-6">
      <table className="w-full text-sm">
        <thead className="bg-[#F9FAFB]">
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s._id} className="border-t">
              <td>{s.rollNo}</td>
              <td>{s.name}</td>
              <td className="flex gap-2 py-2">
                {["present", "absent", "leave"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setRecords({ ...records, [s._id]: st })}
                    className={`px-3 py-1 rounded border
                      ${
                        records[s._id] === st
                          ? "bg-[var(--secondary)] text-white"
                          : ""
                      }`}
                  >
                    {st}
                  </button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={async () => {
          await markAttendance({
            class: classId,
            section: sectionId,
            date,
            session,
            month: new Date(date).getMonth() + 1,
            records: students.map((s) => ({
              student: s._id,
              status: records[s._id],
            })),
          });
          alert("Attendance saved");
        }}
        className="mt-6 px-10 py-3 rounded-md bg-[var(--secondary)] text-white"
      >
        Save Attendance
      </button>
    </div>
  );
}
