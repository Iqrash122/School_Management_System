import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/breadCrums/breadcrums";

export default function Create() {
  const navigate = useNavigate();
  const [sectionName, setSectionName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/sections/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section_name: sectionName }),
      });

      const data = await res.json();
      console.log("RESPONSE:", data);

      if (!res.ok) {
        alert(data.message);
        return;
      }

      navigate("/class/section");
    } catch (error) {
      console.error(error);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-6">
        <Breadcrumbs />
        <button
          onClick={() => navigate("/class/section")}
          className="px-12 py-3 border-2 border-[var(--secondary)]
                     text-[var(--secondary)] rounded-md font-semibold
                     hover:bg-[var(--secondary)] hover:text-white transition"
        >
          Back
        </button>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow max-w-xl"
      >
        <h2 className="text-2xl font-semibold mb-6">Create Section</h2>

        <input
          type="text"
          value={sectionName}
          onChange={(e) => setSectionName(e.target.value)}
          placeholder="Enter section name"
          required
          className="w-full px-4 py-3 border rounded-md mb-6
                     focus:ring-2 focus:ring-[var(--secondary)]"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-10 py-3 border-2 border-[var(--primary)]
                     text-[var(--primary)] rounded-md font-semibold
                     hover:bg-[var(--primary)] hover:text-white transition"
        >
          {loading ? "Saving..." : "Save Section"}
        </button>
      </form>
    </div>
  );
}
