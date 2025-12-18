import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SubjectForm from "../../components/subjects/SubjectForm";
import Breadcrumbs from "../../components/breadCrums/breadcrums";
import { useNavigate } from "react-router-dom";

export default function SubjectsUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/subjects/edit/${id}`)
      .then((res) => res.json())
      .then(setData);
  }, [id]);

  if (!data) return <p className="p-6">Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Breadcrumbs />
        <button
          onClick={() => navigate("/subjects")}
          className="px-6 py-2 bg-(--secondary) text-white rounded cursor-pointer"
        >
          Back
        </button>
      </div>
      <SubjectForm editData={data} />
    </div>
  );
}
