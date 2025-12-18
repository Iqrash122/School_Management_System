import Breadcrumbs from "../../components/breadCrums/breadcrums";
import TeacherFilter from "../../components/filterBar";
import TeacherTable from "../../components/table";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TeacherIndex() {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    const res = await fetch("http://localhost:5000/api/teachers/get");
    const data = await res.json();
    setTeachers(data);
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this teacher?")) return;

    await fetch(`http://localhost:5000/api/teachers/delete/${id}`, {
      method: "DELETE",
    });

    fetchTeachers();
  };

  return (
    <div>
      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-4">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/teacher/create")}
          className="px-12 py-3 rounded-md
                     border-2 
                     font-semibold
                     bg-(--secondary) text-white
                     transition cursor-pointer hover:bg-(--primary)"
        >
          Create
        </button>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-md shadow-sm">
        <TeacherFilter />

        <TeacherTable
          data={teachers}
          onEdit={(id) => navigate(`/teacher/update/${id}`)}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
