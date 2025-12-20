export default function Table({ data = [], onEdit, onDelete }) {

  const BASE_URL = "http://localhost:5000";
  return (
    <div className="bg-white rounded-md shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        {/* TABLE HEAD */}
        <thead className="bg-[#F9FAFB] text-zinc-600 border-b">
          <tr>
            <th className="px-4 py-3">
              <input type="checkbox" />
            </th>
            <th className="px-4 py-3 font-semibold">ID</th>
            <th className="px-4 py-3 font-semibold">Photo</th>
            <th className="px-4 py-3 font-semibold">Name</th>
            <th className="px-4 py-3 font-semibold">Gender</th>
            <th className="px-4 py-3 font-semibold">Specialization</th>
            <th className="px-4 py-3 font-semibold">Class</th>
            <th className="px-4 py-3 font-semibold">Section</th>
            <th className="px-4 py-3 font-semibold">DOB</th>
            <th className="px-4 py-3 font-semibold">Religion</th>
            <th className="px-4 py-3 font-semibold">Bio</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody className="text-center">
          {data.map((item) => (
            <tr
              key={item._id}
              className="border-b last:border-0 hover:bg-[#F7FBFA] transition"
            >
              {/* CHECK */}
              <td className="px-4 py-4">
                <input type="checkbox" />
              </td>

              {/* ID */}
              <td className="px-4 py-4 font-semibold">{item.idNumber}</td>

              {/* PHOTO */}
              <td className="px-4 py-4">
                <img
                  src={item.photo ? `${BASE_URL}/${item.photo}` : "/avatar.png"}
                  className="w-10 h-10 rounded-full object-cover mx-auto"
                />
              </td>

              {/* NAME */}
              <td className="px-4 py-4 font-medium">
                {item.firstName} {item.lastName}
              </td>

              {/* GENDER */}
              <td className="px-4 py-4">{item.gender}</td>

              {/* SPECIALIZATION */}
              <td className="px-4 py-4">{item.specialization}</td>

              {/* CLASS */}
              <td className="px-4 py-4">{item.class}</td>

              {/* SECTION */}
              <td className="px-4 py-4">{item.section}</td>

              {/* DOB */}
              <td className="px-4 py-4">{item.dob}</td>

              {/* RELIGION */}
              <td className="px-4 py-4">{item.religion}</td>

              {/* BIO */}
              <td className="px-4 py-4 max-w-[200px] truncate">{item.bio}</td>

              {/* ACTIONS */}
              <td className="px-4 py-4">
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => onEdit(item._id)}
                    className="text-sm text-green-600 hover:underline"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(item._id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {data.length === 0 && (
            <tr>
              <td colSpan="12" className="py-6 text-zinc-500">
                No teachers found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
