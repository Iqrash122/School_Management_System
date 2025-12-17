import Breadcrumbs from "../../components/breadCrums/breadcrums";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ExamFilter from '../../components/filterBar'
export default function Index() {
  const navigate = useNavigate();

  const exams = [
    {
      id: 1,
      name: "Mid Term Exam",
      subject: "Mathematics",
      class: "10",
      section: "A",
      time: "09:00 AM - 12:00 PM",
      date: "2025-03-15",
    },
    {
      id: 2,
      name: "Final Exam",
      subject: "Physics",
      class: "9",
      section: "B",
      time: "10:00 AM - 01:00 PM",
      date: "2025-04-05",
    },
  ];

  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-row justify-between items-center mb-4">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/exam/create")}
          className="
            px-10 py-3 rounded-md
            bg-[var(--secondary)] text-white font-semibold
            hover:bg-[var(--primary)] transition
          "
        >
          Create Exam
        </button>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-md shadow-sm overflow-x-auto">
        <ExamFilter/>
        <table className="w-full text-sm">
          {/* TABLE HEAD */}
          <thead className="bg-[#F9FAFB] text-zinc-600">
            <tr>
              <th className="px-4 py-3 text-left font-medium">ID</th>
              <th className="px-4 py-3 text-left font-medium">Exam Name</th>
              <th className="px-4 py-3 text-left font-medium">Subject</th>
              <th className="px-4 py-3 text-left font-medium">Class</th>
              <th className="px-4 py-3 text-left font-medium">Section</th>
              <th className="px-4 py-3 text-left font-medium">Time</th>
              <th className="px-4 py-3 text-left font-medium">Date</th>
              <th className="px-4 py-3 text-center font-medium">Actions</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {exams.map((exam) => (
              <tr
                key={exam.id}
                className="border-t hover:bg-[#F1F7F5] transition"
              >

                <td className="px-4 py-3 font-medium">{exam.id}</td>
                <td className="px-4 py-3 font-medium">{exam.name}</td>
                <td className="px-4 py-3">{exam.subject}</td>
                <td className="px-4 py-3">{exam.class}</td>
                <td className="px-4 py-3">{exam.section}</td>
                <td className="px-4 py-3">{exam.time}</td>
                <td className="px-4 py-3">{exam.date}</td>

                {/* ACTIONS */}
                <td className="px-4 py-3">
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye size={18} />
                    </button>

                    <button className="text-green-600 hover:text-green-800">
                      <Pencil size={18} />
                    </button>

                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {/* EMPTY STATE */}
            {exams.length === 0 && (
              <tr>
                <td colSpan="7" className="px-4 py-8 text-center text-zinc-400">
                  No exams scheduled
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
