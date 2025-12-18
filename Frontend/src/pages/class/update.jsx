import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadCrums/breadcrums";
import ClassForm from "../../components/class/ClassForm";

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH SINGLE CLASS
  useEffect(() => {
    const fetchClass = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/classes/single/${id}`
        );
        const data = await res.json();

        setInitialData({
          name: data.name,
          description: data.description || "",
          section: {
            id: data.section_id,
            name: data.section_name,
          },
        });
      } catch (error) {
        alert("Failed to load class");
      } finally {
        setLoading(false);
      }
    };

    fetchClass();
  }, [id]);

  // 🔥 UPDATE HANDLER
  const handleUpdate = async (formData) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/classes/update/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error();

      navigate("/class");
    } catch (error) {
      alert("Failed to update class");
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-row justify-between items-center mb-4">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/class")}
          className="
            px-12 py-3 rounded-md
            bg-[var(--secondary)] text-white font-semibold text-lg
            hover:bg-[var(--primary)] transition
          "
        >
          Back
        </button>
      </div>

      <h2 className="text-xl font-semibold text-zinc-800 mb-6">Update Class</h2>

      {/* 🔥 REUSABLE FORM */}
      <ClassForm onSubmit={handleUpdate} initialData={initialData} />
    </div>
  );
}
