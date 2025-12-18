import Breadcrumbs from "../../components/breadCrums/breadcrums";
import { useNavigate } from "react-router-dom";
import SubjectForm from "../../components/subjects/SubjectForm";

export default function SubjectsCreate() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/subjects")}
          className="px-12 py-3 rounded-md bg-(--secondary)
                     text-white font-semibold hover:bg-(--primary)]transition"
        >
          Back
        </button>
      </div>

      <SubjectForm />
    </div>
  );
}
