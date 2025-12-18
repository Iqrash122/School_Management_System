import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TeacherForm from "../../components/TeacherForm";
import Breadcrumbs from "../../components/breadCrums/breadcrums";
export default function TeacherUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/teachers/edit/${id}`)
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error(err));
  }, [id]);

  if (!data) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-4">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/teacher")}
          className="px-12 py-3 rounded-md bg-(--secondary) text-white cursor-pointer hover:bg-(--primary)"
        >
          Back
        </button>
      </div>
      <TeacherForm editData={data} />
    </div>
  );
}
