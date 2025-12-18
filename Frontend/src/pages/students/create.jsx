import Breadcrumbs from "../../components/breadCrums/breadcrums";
import { useNavigate } from "react-router-dom";
import StudentForm from "../../components/StudentForm";
export default function Create() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/students")}
          className=" px-12 py-3 rounded-md  bg-(--secondary) text-white font-semibold text-lg hover:bg-(--primary) cursor-pointer transition"
        >
          Back
        </button>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-zinc-800">Add New Student</h2>
      </div>
      <StudentForm mode="student" type="create" />
    </div>
  );
}
