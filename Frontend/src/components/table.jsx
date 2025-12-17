export default function Table({ data = [] }) {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        {/* TABLE HEAD */}
        <thead className="bg-[#F9FAFB] text-zinc-600 border-b">
          <tr>
            <th className="px-4 py-3">
              <input type="checkbox" />
            </th>
            <th className="px-4 py-3 font-semibold">Roll</th>
            <th className="px-4 py-3 font-semibold">Photo</th>
            <th className="px-4 py-3 font-semibold">Name</th>
            <th className="px-4 py-3 font-semibold">Gender</th>
            <th className="px-4 py-3 font-semibold">Class</th>
            <th className="px-4 py-3 font-semibold">Section</th>
            <th className="px-4 py-3 font-semibold">Parents</th>
            <th className="px-4 py-3 font-semibold">Address</th>
            <th className="px-4 py-3 font-semibold">Date Of Birth</th>
            <th className="px-4 py-3 font-semibold">Phone</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody className="text-center">
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b last:border-0 hover:bg-[#F7FBFA] transition"
            >
              {/* CHECK */}
              <td className="px-4 py-4">
                <input type="checkbox" />
              </td>

              {/* ROLL */}
              <td className="px-4 py-4 font-medium text-black">#{item.roll}</td>

              {/* PHOTO */}
              <td className="px-4 py-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>

              {/* NAME */}
              <td className="px-4 py-4 font-medium">{item.name}</td>

              {/* GENDER */}
              <td className="px-4 py-4">{item.gender}</td>

              {/* CLASS */}
              <td className="px-4 py-4">{item.class}</td>

              {/* SECTION */}
              <td className="px-4 py-4">{item.section}</td>

              {/* PARENTS */}
              <td className="px-4 py-4">{item.parent}</td>

              {/* ADDRESS */}
              <td className="px-4 py-4">{item.address}</td>

              {/* DOB */}
              <td className="px-4 py-4">{item.dob}</td>

              {/* PHONE */}
              <td className="px-4 py-4">{item.phone}</td>

              {/* EMAIL */}

              {/* ACTION */}
              {/* ACTION */}
              <td className="px-4 py-4">
                <div className="flex items-center justify-center gap-4">
                  <button className="text-sm text-blue-600 hover:underline cursor-pointer">
                    View
                  </button>

                  <button className="text-sm text-green-600 hover:underline cursor-pointer">
                    Edit
                  </button>

                  <button className="text-sm text-red-600 hover:underline cursor-pointer">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
