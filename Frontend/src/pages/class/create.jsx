import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/breadCrums/breadcrums";
import ClassForm from "../../components/class/ClassForm";

export default function Create() {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    await fetch("http://localhost:5000/api/classes/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    navigate("/class");
  };
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

      <h2 className="text-xl font-semibold text-zinc-800 mb-6">
        Add New Class
      </h2>

      <ClassForm onSubmit={handleCreate} />
    </div>
  );
}
