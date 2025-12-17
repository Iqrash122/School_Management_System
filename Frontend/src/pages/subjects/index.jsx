import Breadcrumbs from "../../components/breadCrums/breadcrums";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SubjectFilter from '../../components/filterBar'
export default function Index() {
  const navigate = useNavigate();

  const subjects = [
    {
      id: 1,
      subject: "Mathematics",
      type: "Core",
      class: "10",
      section: "A",
      teacher: "Ali Khan",
    },
    {
      id: 2,
      subject: "Physics",
      type: "Core",
      class: "9",
      section: "B",
      teacher: "Sara Ahmed",
    },
    {
      id: 3,
      subject: "Computer",
      type: "Optional",
      class: "8",
      section: "C",
      teacher: "Usman Raza",
    },
  ];

  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-row justify-between items-center mb-4">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/subjects/create")}
          className="
            px-10 py-3 rounded-md
            bg-[var(--secondary)] text-white font-semibold
            hover:bg-[var(--primary)] transition cursor-pointer
          "
        >
          Create Subject
        </button>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-md shadow-sm overflow-x-auto">
        <SubjectFilter/>
        <table className="w-full text-sm">
          {/* TABLE HEAD */}
          <thead className="bg-[#F9FAFB] text-zinc-600">
            <tr>
              <th className="px-4 py-3 text-left font-medium">ID</th>
              <th className="px-4 py-3 text-left font-medium">Subject</th>
              <th className="px-4 py-3 text-left font-medium">Type</th>
              <th className="px-4 py-3 text-left font-medium">Class</th>
              <th className="px-4 py-3 text-left font-medium">Section</th>
              <th className="px-4 py-3 text-left font-medium">Teacher</th>
              <th className="px-4 py-3 text-center font-medium">Actions</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {subjects.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-[#F1F7F5] transition"
              >
                <td className="px-4 py-3">{item.id}</td>
                <td className="px-4 py-3 font-medium">{item.subject}</td>
                <td className="px-4 py-3">{item.type}</td>
                <td className="px-4 py-3">{item.class}</td>
                <td className="px-4 py-3">{item.section}</td>
                <td className="px-4 py-3">{item.teacher}</td>

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
          </tbody>
        </table>
      </div>
    </div>
  );
}
