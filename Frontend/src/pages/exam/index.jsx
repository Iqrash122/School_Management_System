import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/breadCrums/breadcrums";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ExamFilter from "../../components/filterBar";
import { getExams, deleteExam } from "../../services/api";

export default function Index() {
  const navigate = useNavigate();
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    loadExams();
  }, []);

  const normalizeExams = (res) => {
    // API could return [] OR {exams:[]} OR {data:[]}
    if (Array.isArray(res)) return res;
    if (Array.isArray(res?.exams)) return res.exams;
    if (Array.isArray(res?.data)) return res.data;
    return [];
  };

  const loadExams = async () => {
    try {
      setErrMsg("");
      setLoading(true);

      const res = await getExams();
      const list = normalizeExams(res);
      setExams(list);
    } catch (e) {
      setErrMsg("Exams load nahi ho rahe. Backend/API check karo.");
      setExams([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this exam?")) return;

    try {
      await deleteExam(id);
      loadExams();
    } catch {
      alert("Delete failed");
    }
  };

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <Breadcrumbs />
        <button
          onClick={() => navigate("/exam/create")}
          className="px-10 py-3 rounded-md bg-[var(--secondary)] text-white font-semibold hover:bg-[var(--primary)] transition"
        >
          Create Exam
        </button>
      </div>

      <div className="bg-white rounded-md shadow-sm overflow-x-auto">
        <ExamFilter />

        {/* STATUS */}
        {loading && (
          <div className="p-4 text-sm text-zinc-500">Loading exams...</div>
        )}

        {errMsg && <div className="p-4 text-sm text-red-600">{errMsg}</div>}

        {!loading && !errMsg && (
          <table className="w-full text-sm">
            <thead className="bg-[#F9FAFB] text-zinc-600 ">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Exam</th>
                <th className="px-4 py-3">Subject</th>
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3">Section</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {exams.map((exam, i) => (
                <tr key={exam._id || i} className="border-t hover:bg-[#F1F7F5] text-center">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">{exam.name}</td>

                  {/* populate na ho to fallback */}
                  <td className="px-4 py-3">
                    {exam.subject?.name || exam.subjectName || "-"}
                  </td>
                  <td className="px-4 py-3">
                    {exam.class?.name || exam.className || "-"}
                  </td>
                  <td className="px-4 py-3">
                    {exam.section?.name || exam.sectionName || "-"}
                  </td>

                  <td className="px-4 py-3">
                    {exam.timeFrom || "-"} - {exam.timeTo || "-"}
                  </td>
                  <td className="px-4 py-3">{exam.examDate || "-"}</td>

                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-3">
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => navigate(`/exam/view/${exam._id}`)}
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        className="text-green-600 hover:text-green-800"
                        onClick={() => navigate(`/exam/update/${exam._id}`)}
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(exam._id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {exams.length === 0 && (
                <tr>
                  <td colSpan="8" className="py-8 text-center text-zinc-400">
                    No exams scheduled
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
