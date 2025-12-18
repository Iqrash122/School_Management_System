import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/breadCrums/breadcrums";
import ClassFilter from "../../components/filterBar";

export default function Index() {
  const navigate = useNavigate();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/classes/show");
        const data = await res.json();
        setClasses(data);
      } catch (error) {
        console.error("Failed to load classes");
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this class?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/classes/delete/${id}`,
        { method: "DELETE" }
      );

      if (!res.ok) throw new Error();

      setClasses((prev) => prev.filter((c) => c._id !== id));
    } catch (error) {
      alert("Failed to delete class");
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-4">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/class/create")}
          className="px-12 py-3 rounded-md bg-[var(--secondary)]
          text-white font-semibold text-lg hover:bg-[var(--primary)]
          transition-all active:scale-95"
        >
          Create
        </button>
      </div>

      <div className="bg-white rounded-md shadow-sm">
        <ClassFilter />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-[#F9FAFB] border-b">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">ID</th>
                <th className="px-4 py-3 text-left font-semibold">Class</th>
                <th className="px-4 py-3 text-left font-semibold">Section</th>

                <th className="px-4 py-3 text-left font-semibold">
                  Description
                </th>
                <th className="px-4 py-3 text-center font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading && (
                <tr>
                  <td colSpan="7" className="px-4 py-8 text-center">
                    Loading...
                  </td>
                </tr>
              )}

              {!loading &&
                classes.map((item, index) => (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-[#F1F7F5] transition"
                  >
                    <td className="px-4 py-3">{index + 1}</td>

                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.section_name}</td>

                    <td className="px-4 py-3">{item.description || "-"}</td>

                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-4">
                        <button
                          onClick={() => navigate(`/class/${item._id}`)}
                          className="text-zinc-500 hover:text-[var(--primary)]"
                        >
                          View
                        </button>

                        <button
                          onClick={() => navigate(`/class/${item._id}/edit`)}
                          className="text-zinc-500 hover:text-green-600"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(item._id)}
                          className="text-zinc-500 hover:text-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

              {!loading && classes.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="px-4 py-8 text-center text-zinc-400"
                  >
                    No classes found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
