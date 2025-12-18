import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../../../components/breadCrums/breadcrums";

export default function EditSection() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [sectionName, setSectionName] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchSection = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/sections/single/${id}`
        );
        const data = await res.json();
        setSectionName(data.section_name);
      } catch (error) {
        alert("Failed to load section");
      } finally {
        setLoading(false);
      }
    };

    fetchSection();
  }, [id]);

  const handleUpdate = async () => {
    if (!sectionName.trim()) {
      alert("Section name is required");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch(
        `http://localhost:5000/api/sections/update/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ section_name: sectionName }),
        }
      );

      if (!res.ok) throw new Error();

      navigate("/class/section");
    } catch (error) {
      alert("Failed to update section");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-6">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/class/section")}
          className="px-12 py-3 rounded-md cursor-pointer border-2 border-[var(--secondary)] text-[var(--secondary)] font-semibold text-lg hover:bg-[var(--secondary)] hover:text-white transition-all duration-300"
        >
          Create
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-6">Edit Section</h2>

      <label className="block mb-2 font-semibold">Section Name</label>
      <input
        type="text"
        value={sectionName}
        onChange={(e) => setSectionName(e.target.value)}
        className="w-full px-4 py-3 border rounded outline-none
                   focus:ring-2 focus:ring-blue-400"
        placeholder="Enter section name"
      />

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 border rounded text-gray-600
                     hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          onClick={handleUpdate}
          disabled={saving}
          className="px-6 py-2 border border-blue-500 text-blue-500
                     rounded hover:bg-blue-500 hover:text-white
                     transition-all active:scale-95 disabled:opacity-50"
        >
          {saving ? "Updating..." : "Update"}
        </button>
      </div>
    </div>
  );
}
