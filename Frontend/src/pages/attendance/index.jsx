// pages/attendance/Index.jsx  (Updated Simple Version)
import Breadcrumbs from "../../components/breadCrums/breadcrums";
import { useNavigate } from "react-router-dom";
import AttendenceFilter from "../../components/AttendenceFilter";
import { useEffect, useState } from "react";
import { getStudentsByClassSection, getAttendance } from "../../services/api";

export default function Index() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({});
  const [students, setStudents] = useState([]);
  const [monthlySummary, setMonthlySummary] = useState({}); // {studentId: {p,a,l}}
  const [loading, setLoading] = useState(false);
  const [todayStatus, setTodayStatus] = useState({}); // {studentId: status}

  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  useEffect(() => {
    const fetchData = async () => {
      if (
        !filters.classId ||
        !filters.sectionId ||
        !filters.month ||
        !filters.session
      ) {
        setStudents([]);
        setMonthlySummary({});
        setTodayStatus({});
        return;
      }

      setLoading(true);

      try {
        // 1. Get all students
        const studs = await getStudentsByClassSection(
          filters.classId,
          filters.sectionId
        );
        const studentList = studs || [];
        setStudents(studentList);

        // 2. Initialize summary
        const summary = {};
        studentList.forEach((s) => {
          summary[s._id] = { present: 0, absent: 0, leave: 0 };
        });

        // 3. Get today's attendance (if exists)
        const todayAttendance = await getAttendance(
          filters.classId,
          filters.sectionId,
          today
        );
        const todayMap = {};
        if (todayAttendance && todayAttendance.records) {
          todayAttendance.records.forEach((rec) => {
            if (rec.student?._id) {
              todayMap[rec.student._id] = rec.status;
            }
          });
        }
        setTodayStatus(todayMap);

        // 4. Fetch attendance for all days in the month (simple loop)
        const year = filters.session.includes("2024") ? 2024 : 2025;
        const daysInMonth = new Date(year, filters.month, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
          const dateStr = `${year}-${filters.month
            .toString()
            .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

          const att = await getAttendance(
            filters.classId,
            filters.sectionId,
            dateStr
          );

          if (att && att.records) {
            att.records.forEach((rec) => {
              const sid = rec.student?._id || rec.student;
              if (sid && summary[sid]) {
                if (rec.status === "present") summary[sid].present++;
                else if (rec.status === "absent") summary[sid].absent++;
                else if (rec.status === "leave") summary[sid].leave++;
              }
            });
          }
        }

        setMonthlySummary(summary);
      } catch (err) {
        console.error("Error fetching attendance:", err);
      }

      setLoading(false);
    };

    fetchData();
  }, [filters]);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Breadcrumbs />
        <button
          onClick={() => navigate("/attendance/create")}
          className="px-12 py-3 rounded-md bg-[var(--secondary)] text-white font-semibold text-lg hover:opacity-90 transition"
        >
          Create Attendance
        </button>
      </div>

      <div className="bg-white rounded-md shadow-sm mb-6">
        <AttendenceFilter onFilterChange={setFilters} />
      </div>

      {loading && (
        <div className="text-center py-10 text-zinc-500">
          Loading attendance summary...
        </div>
      )}

      {!loading && students.length > 0 && (
        <div className="bg-white rounded-md shadow-sm overflow-x-auto">
          <h3 className="text-lg font-semibold p-6 border-b">
            Attendance Summary - {filters.session} (
            {new Date(2025, filters.month - 1).toLocaleString("default", {
              month: "long",
            })}
            )
          </h3>

          <table className="w-full text-sm">
            <thead className="bg-[#F9FAFB]">
              <tr>
                <th className="px-6 py-4 text-left">Roll No</th>
                <th className="px-6 py-4 text-left">Student Name</th>
                <th className="px-6 py-4 text-center">Today's Status</th>
                <th className="px-6 py-4 text-center text-green-600">
                  Present
                </th>
                <th className="px-6 py-4 text-center text-red-600">Absent</th>
                <th className="px-6 py-4 text-center text-yellow-600">Leave</th>
                <th className="px-6 py-4 text-center">Total Days</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                const stats = monthlySummary[student._id] || {
                  present: 0,
                  absent: 0,
                  leave: 0,
                };
                const totalDays = stats.present + stats.absent + stats.leave;
                const todayStat = todayStatus[student._id];

                return (
                  <tr key={student._id} className="border-t hover:bg-gray-50">
                    <td className="px-6 py-4">
                      {student.rollNumber || student.rollNo || "-"}
                    </td>
                    <td className="px-6 py-4 font-medium">
                      {(student.firstName || "") +
                        " " +
                        (student.lastName || student.name || "")}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-block px-4 py-2 rounded-full text-white font-bold text-sm
                        ${
                          todayStat === "present"
                            ? "bg-green-500"
                            : todayStat === "absent"
                            ? "bg-red-500"
                            : todayStat === "leave"
                            ? "bg-yellow-500"
                            : "bg-gray-400"
                        }`}
                      >
                        {todayStat ? todayStat.charAt(0).toUpperCase() : "-"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      {stats.present}
                    </td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">
                      {stats.absent}
                    </td>
                    <td className="px-6 py-4 text-center text-yellow-600 font-semibold">
                      {stats.leave}
                    </td>
                    <td className="px-6 py-4 text-center">{totalDays}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {!loading && students.length === 0 && Object.keys(filters).length > 0 && (
        <div className="text-center py-10 text-red-500">
          No students found for the selected class and section.
        </div>
      )}
    </div>
  );
}
