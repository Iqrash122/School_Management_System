import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/breadCrums/breadcrums";
import { useNavigate, useParams } from "react-router-dom";
import ExamForm from "../../components/class/ExamForm";
import { getExamById } from "../../services/api";

export default function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getExamById(id);
      // API shape: may return {exam:{...}} or direct exam
      const exam = res?.exam || res;
      setInitialData(exam);
    })();
  }, [id]);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Breadcrumbs />
        <button
          onClick={() => navigate("/exam")}
          className="px-12 py-3 rounded-md bg-[var(--secondary)] text-white font-semibold hover:bg-[var(--primary)] transition"
        >
          Back
        </button>
      </div>

      <h2 className="text-xl font-semibold text-zinc-800 mb-6">Update Exam</h2>

      {!initialData ? (
        <div className="p-4 text-zinc-500">Loading...</div>
      ) : (
        <ExamForm mode="update" examId={id} initialData={initialData} />
      )}
    </div>
  );
}
