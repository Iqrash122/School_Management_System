import Breadcrumbs from "../../components/breadCrums/breadcrums";
import { useNavigate } from "react-router-dom";
import TeacherForm from "../../components/TeacherForm";
export default function Create() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/teacher")}
          className=" px-12 py-3 rounded-md  bg-(--secondary) text-white font-semibold text-lg hover:bg-(--primary) cursor-pointer transition"
        >
          Back
        </button>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-zinc-800">Add New Teacher</h2>
      </div>
      <TeacherForm mode="teacher" />
    </div>
  );
}
