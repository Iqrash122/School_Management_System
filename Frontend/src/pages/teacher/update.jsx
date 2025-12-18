import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TeacherForm from "../../components/TeacherForm";

export default function TeacherUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/teachers/${id}`)
      .then((res) => res.json())
      .then(setData);
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return <TeacherForm editData={data} />;
}
