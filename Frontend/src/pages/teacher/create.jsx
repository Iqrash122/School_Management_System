import Breadcrumbs from "../../components/breadCrums/breadcrums";
import { useNavigate } from "react-router-dom";
import TeacherForm from "../../components/TeacherForm";

export default function TeacherCreate() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between">
        <Breadcrumbs />
        <button
          onClick={() => navigate("/teacher")}
          className="px-12 py-3 rounded-md bg-(--secondary) text-white"
        >
          Back
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-4">Add New Teacher</h2>
      <TeacherForm />
    </div>
  );
}
