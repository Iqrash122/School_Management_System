import Breadcrumbs from "../../components/breadCrums/breadcrums";
import { useNavigate } from "react-router-dom";
import ExamForm from "../../components/class/ExamForm";

export default function Create() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Breadcrumbs />
        <button
          onClick={() => navigate("/exam")}
          className="px-12 py-3 rounded-md bg-[var(--secondary)]
                     text-white font-semibold hover:bg-[var(--primary)]"
        >
          Back
        </button>
      </div>

      <h2 className="text-xl font-semibold text-zinc-800 mb-6">Add New Exam</h2>

      <ExamForm />
    </div>
  );
}
