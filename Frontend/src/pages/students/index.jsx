import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/breadCrums/breadcrums";

export default function StudentsIndex() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/students/show")
      .then((res) => res.json())
      .then(setStudents);
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    await fetch(`http://localhost:5000/api/students/delete/${id}`, {
      method: "DELETE",
    });

    setStudents((prev) => prev.filter((s) => s._id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Breadcrumbs />
        <button
          onClick={() => navigate("/students/create")}
          className="px-8 py-2 bg-[var(--secondary)] text-white rounded"
        >
          Add Student
        </button>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Reg#</th>
              <th className="p-3">ROll #</th>
              <th className="p-3">Photo</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Class</th>
              <th>Section</th>
              <th>Parents</th>
              <th>DOB</th>
              <th>Number</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="text-center justify-center items-center ">
            {students.map((s) => (
              <tr key={s._id} className="border-b">
                <td className="p-3">{s.registrationNumber}</td>
                <td className="p-3">{s.rollNumber}</td>
                <td className="p-3">
                  {s.photo ? (
                    <img
                      src={s.photo}
                      alt={`${s.firstName} ${s.lastName}`}
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                  ) : (
                    <span className="text-gray-400">No Photo</span>
                  )}
                </td>
                <td>
                  {s.firstName} {s.lastName}
                </td>
                <td>{s.gender}</td>
                <td>{s.class}</td>
                <td>{s.section}</td>
                <td>{s.fName}</td>
                <td>{s.dateOfBirth}</td>
                <td>{s.fNumber}</td>
                <td className="flex gap-3 p-2 flex-row h-full items-center text-center justify-center">
                  <button
                    onClick={() => navigate(`/students/update/${s._id}`)}
                    className="text-blue-600 text-center "
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(s._id)}
                    className="text-red-600 text-center"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {students.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-400">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
