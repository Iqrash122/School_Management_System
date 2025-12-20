import { useEffect, useMemo, useState } from "react";
import SelectField from "../common/SelectField";
import {
  getSubjects,
  getClasses,
  getSections,
  createExam,
  updateExam,
} from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function ExamForm({ mode = "create", examId, initialData }) {
  const navigate = useNavigate();

  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const normalizeList = (list) =>
    (Array.isArray(list) ? list : []).map((item) => ({
      id: item._id || item.id,
      name: item.name,
    }));

  const makeValueObj = (val) => {
    // initialData may have populated object or just id
    if (!val) return null;
    if (typeof val === "string") return { id: val, name: "" };
    if (val?._id) return { id: val._id, name: val.name || "" };
    if (val?.id) return { id: val.id, name: val.name || "" };
    return null;
  };

  const [form, setForm] = useState({
    name: "",
    subject: null,
    class: null,
    section: null,
    examDate: "",
    timeFrom: "",
    timeTo: "",
    description: "",
  });

  // set initial values in update mode
  useEffect(() => {
    if (mode !== "update" || !initialData) return;

    setForm({
      name: initialData.name || "",
      subject: makeValueObj(initialData.subject),
      class: makeValueObj(initialData.class),
      section: makeValueObj(initialData.section),
      examDate: initialData.examDate || "",
      timeFrom: initialData.timeFrom || "",
      timeTo: initialData.timeTo || "",
      description: initialData.description || "",
    });
  }, [mode, initialData]);

  useEffect(() => {
    loadDropdowns();
  }, []);

  const loadDropdowns = async () => {
    const s = await getSubjects();
    const c = await getClasses();
    const sec = await getSections();

    // some APIs might return {data:[]}
    const subjectsArr = Array.isArray(s) ? s : s?.data || s?.subjects || [];
    const classesArr = Array.isArray(c) ? c : c?.data || c?.classes || [];
    const sectionsArr = Array.isArray(sec)
      ? sec
      : sec?.data || sec?.sections || [];

    setSubjects(normalizeList(subjectsArr));
    setClasses(normalizeList(classesArr));
    setSections(normalizeList(sectionsArr));
  };

  // ensure selected values have names too (optional UX)
  const filledSubject = useMemo(() => {
    if (!form.subject?.id) return null;
    return subjects.find((x) => x.id === form.subject.id) || form.subject;
  }, [form.subject, subjects]);

  const filledClass = useMemo(() => {
    if (!form.class?.id) return null;
    return classes.find((x) => x.id === form.class.id) || form.class;
  }, [form.class, classes]);

  const filledSection = useMemo(() => {
    if (!form.section?.id) return null;
    return sections.find((x) => x.id === form.section.id) || form.section;
  }, [form.section, sections]);

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !form.name ||
      !filledSubject?.id ||
      !filledClass?.id ||
      !filledSection?.id
    ) {
      setError("Please fill all required fields");
      return;
    }

    const payload = {
      name: form.name,
      subject: filledSubject.id,
      class: filledClass.id,
      section: filledSection.id,
      examDate: form.examDate,
      timeFrom: form.timeFrom,
      timeTo: form.timeTo,
      description: form.description,
    };

    try {
      setLoading(true);

      if (mode === "update") {
        await updateExam(examId, payload);
      } else {
        await createExam(payload);
      }

      navigate("/exam");
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-6">
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="text-sm font-medium text-zinc-600">
            Exam Name *
          </label>
          <input
            placeholder="Mid Term / Final"
            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]
                       outline-none focus:ring-2 focus:ring-[var(--secondary)]"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <SelectField
          label="Subject *"
          options={subjects}
          value={filledSubject}
          onChange={(obj) => setForm({ ...form, subject: obj })}
        />

        <SelectField
          label="Class *"
          options={classes}
          value={filledClass}
          onChange={(obj) => setForm({ ...form, class: obj })}
        />

        <SelectField
          label="Section *"
          options={sections}
          value={filledSection}
          onChange={(obj) => setForm({ ...form, section: obj })}
        />

        <div>
          <label className="text-sm font-medium text-zinc-600">Exam Date</label>
          <input
            type="date"
            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6]"
            value={form.examDate}
            onChange={(e) => setForm({ ...form, examDate: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-zinc-600">Exam Time</label>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <input
              type="time"
              className="px-4 py-3 rounded-md bg-[#F3F4F6]"
              value={form.timeFrom}
              onChange={(e) => setForm({ ...form, timeFrom: e.target.value })}
            />
            <input
              type="time"
              className="px-4 py-3 rounded-md bg-[#F3F4F6]"
              value={form.timeTo}
              onChange={(e) => setForm({ ...form, timeTo: e.target.value })}
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <label className="text-sm font-medium text-zinc-600">
            Description
          </label>
          <textarea
            rows="3"
            className="mt-2 w-full px-4 py-3 rounded-md bg-[#F3F4F6] resize-none"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>

        {error && (
          <div className="md:col-span-3 text-red-600 text-sm">{error}</div>
        )}

        <div className="md:col-span-3 flex gap-4 mt-2">
          <button
            disabled={loading}
            className={`px-12 py-3 rounded-md font-semibold text-white
              ${
                loading ? "bg-gray-400" : "bg-[#0A2540] hover:opacity-90"
              } transition`}
          >
            {loading
              ? "Saving..."
              : mode === "update"
              ? "Update Exam"
              : "Save Exam"}
          </button>
        </div>
      </form>
    </div>
  );
}
