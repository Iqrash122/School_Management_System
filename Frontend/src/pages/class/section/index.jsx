import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/breadCrums/breadcrums";

export default function Index() {
  const navigate = useNavigate();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/sections/show");
        const data = await res.json();
        setSections(data);
      } catch (error) {
        console.error("Failed to fetch sections", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are You sure You want to Delete!");
    if (!confirmDelete) {
      return;
    }
    try {
      const res = await fetch(
        `http://localhost:5000/api/sections/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        throw new Error("Delete Failed");
      }
      setSections((prevSections) =>
        prevSections.filter((section) => section._id !== id)
      );
    } catch (error) {
      alert("Failed to Delete the Section");
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-6">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/class/section/create")}
          className="px-12 py-3 rounded-md cursor-pointer border-2 border-[var(--secondary)] text-[var(--secondary)] font-semibold text-lg hover:bg-[var(--secondary)] hover:text-white transition-all duration-300"
        >
          Create
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead className="bg-[var(--primary)] text-white">
            <tr>
              <th className="px-6 py-4 text-left">ID</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td colSpan="3" className="text-center py-6">
                  Loading...
                </td>
              </tr>
            )}

            {!loading &&
              sections.map((section, index) => (
                <tr
                  key={section._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{section.section_name}</td>
                  <td className="px-6 py-4 flex gap-3">
                    <button
                      className="px-4 py-1 border border-blue-500 text-blue-500
                                 rounded hover:bg-blue-500 hover:text-white
                                 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => {
                        handleDelete(section._id);
                      }}
                      className="px-4 py-1 border border-red-500 text-red-500
                                 rounded hover:bg-red-500 hover:text-white
                                 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

            {!loading && sections.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500">
                  No sections found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
