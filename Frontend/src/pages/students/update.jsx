import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/breadCrums/breadcrums";
import StudentForm from "../../components/StudentForm";

export default function StudentsUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/students/single/${id}`)
      .then((res) => res.json())
      .then(setStudent);
  }, [id]);

  if (!student) return <p className="p-6">Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Breadcrumbs />
        <button
          onClick={() => navigate("/students")}
          className="px-6 py-2 bg-gray-600 text-white rounded"
        >
          Back
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-4">Edit Student</h2>

      <StudentForm mode="student" type="update" initialData={student} />
    </div>
  );
}
