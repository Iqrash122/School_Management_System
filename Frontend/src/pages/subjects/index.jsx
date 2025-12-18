import Breadcrumbs from "../../components/breadCrums/breadcrums";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SubjectFilter from "../../components/filterBar";
import { useEffect, useState } from "react";

export default function SubjectsIndex() {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);

  const fetchSubjects = async () => {
    const res = await fetch("http://localhost:5000/api/subjects/get");
    const data = await res.json();
    setSubjects(data);
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this subject?")) return;

    await fetch(`http://localhost:5000/api/subjects/delete/${id}`, {
      method: "DELETE",
    });

    fetchSubjects();
  };

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/subjects/create")}
          className="px-10 py-3 rounded-md bg-(--secondary)
                     text-white font-semibold hover:bg-(--primary) transition"
        >
          Create Subject
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-md shadow-sm overflow-x-auto">
        <SubjectFilter />

        <table className="w-full text-sm">
          <thead className="bg-[#F9FAFB] text-zinc-600">
            <tr>
              <th className="px-4 py-3 text-left">Subject</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Class</th>
              <th className="px-4 py-3 text-left">Section</th>
              <th className="px-4 py-3 text-left">Teacher</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((item) => (
              <tr key={item._id} className="border-t hover:bg-[#F1F7F5]">
                <td className="px-4 py-3 font-medium">{item.name}</td>
                <td className="px-4 py-3">{item.type}</td>
                <td className="px-4 py-3">{item.class?.name}</td>
                <td className="px-4 py-3">{item.section?.name}</td>
                <td className="px-4 py-3">
                  {item.teacher?.firstName} {item.teacher?.lastName}
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-600">
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() => navigate(`/subjects/update/${item._id}`)}
                      className="text-green-600"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {subjects.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-zinc-500">
                  No subjects found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
