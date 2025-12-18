import Breadcrumbs from "../../components/breadCrums/breadcrums";
import TeacherFilter from "../../components/filterBar";
import TeacherTable from "../../components/table";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TeacherIndex() {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/teachers")
      .then((res) => res.json())
      .then(setTeachers);
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <Breadcrumbs />
        <button
          onClick={() => navigate("/teacher/create")}
          className="px-12 py-3 rounded-md bg-[var(--secondary)] text-white"
        >
          Create
        </button>
      </div>

      <div className="bg-white rounded-md shadow-sm">
        <TeacherFilter />
        <TeacherTable data={teachers} />
      </div>
    </div>
  );
}
