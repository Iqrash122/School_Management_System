import Breadcrumbs from "../../components/breadCrums/breadcrums";
import { useNavigate } from "react-router-dom";
import SubjectForm from "../../components/subjects/SubjectForm";

export default function Create() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/subjects")}
          className="
            px-12 py-3 rounded-md bg-[var(--secondary)]
            text-white font-semibold hover:bg-[var(--primary)] cursor-pointer
            transition
          "
        >
          Back
        </button>
      </div>

      <h2 className="text-xl font-semibold text-zinc-800 mb-6">
        Add New Subject
      </h2>

      <SubjectForm />
    </div>
  );
}
