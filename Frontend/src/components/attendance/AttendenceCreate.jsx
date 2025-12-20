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
    const data = await getStudentsByClassSection(classId, sectionId);

    setStudents(data || []);

    // Default all students as present
    const initialRecords = {};
    (data || []).forEach((student) => {
      initialRecords[student._id] = "present";
    });
    setRecords(initialRecords);

    setLoading(false);
  };

  if (loading) {
    return <div className="mt-6 text-zinc-500">Loading students...</div>;
  }

  if (students.length === 0) {
    return (
      <div className="mt-6 text-red-500 font-medium">
        No students found for selected class & section
      </div>
    );
  }

  return (
    <div className="bg-white rounded-md shadow-sm p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4">Mark Attendance</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-[#F9FAFB] border-b">
            <tr>
              <th className="text-left py-3 px-4 font-medium">Roll No</th>
              <th className="text-left py-3 px-4 font-medium">Student Name</th>
              <th className="text-center py-3 px-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id} className="border-b hover:bg-gray-50">
                {/* Roll Number */}
                <td className="py-4 px-4">
                  {student.rollNumber || student.rollNo || "-"}
                </td>

                {/* Student Name */}
                <td className="py-4 px-4 font-medium">
                  {student.firstName || student.name
                    ? `${student.firstName || ""} ${
                        student.lastName || student.name || ""
                      }`.trim()
                    : "No Name"}
                </td>

                {/* Attendance Buttons */}
                <td className="py-4 px-4">
                  <div className="flex justify-center gap-3">
                    {["present", "absent", "leave"].map((status) => (
                      <button
                        key={status}
                        onClick={() =>
                          setRecords({ ...records, [student._id]: status })
                        }
                        className={`px-4 py-2 rounded-md border font-medium capitalize transition
                          ${
                            records[student._id] === status
                              ? "bg-[var(--secondary)] text-white border-[var(--secondary)]"
                              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                          }`}
                      >
                        {status === "present"
                          ? "Present"
                          : status === "absent"
                          ? "Absent"
                          : "Leave"}
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Save Button */}
      <div className="mt-8 text-center">
        <button
          onClick={async () => {
            const attendanceData = {
              class: classId,
              section: sectionId,
              date,
              session,
              month: new Date(date).getMonth() + 1,
              records: students.map((s) => ({
                student: s._id,
                status: records[s._id] || "present",
              })),
            };

            await markAttendance(attendanceData);
            alert("Attendance saved successfully!");
          }}
          className="px-12 py-3 rounded-md bg-[var(--secondary)] text-white font-medium hover:opacity-90 transition"
        >
          Save Attendance
        </button>
      </div>
    </div>
  );
}
