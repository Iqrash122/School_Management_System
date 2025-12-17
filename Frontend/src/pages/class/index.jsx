import Breadcrumbs from "../../components/breadCrums/breadcrums";
import ClassFilter from "../../components/filterBar";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  const classes = [
    {
      id: 1,
      class: "10",
      section: "A",
      teacher: "Ali Khan",
      desc:'hello'
    },
    {
      id: 2,
      class: "9",
      section: "B",
      teacher: "Sara Ahmed",
      desc:'hello'  
    },
  ];

  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-row justify-between items-center mb-4">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/class/create")}
          className="px-12 py-3 rounded-md cursor-pointer bg-[var(--secondary)]
          text-white font-semibold text-lg hover:bg-[var(--primary)]
          transition"
        >
          Create
        </button>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-md shadow-sm">
        <ClassFilter />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            {/* HEAD */}
            <thead className="bg-[#F9FAFB] border-b">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">ID</th>
                <th className="px-4 py-3 text-left font-semibold">Class</th>
                <th className="px-4 py-3 text-left font-semibold">Section</th>
                <th className="px-4 py-3 text-left font-semibold">Teacher</th>
                <th className="px-4 py-3 text-left font-semibold">Timetable</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
                <th className="px-4 py-3 text-center font-semibold">Actions</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {classes.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-[#F1F7F5] transition"
                >
                  <td className="px-4 py-3">{item.id}</td>
                  <td className="px-4 py-3">{item.class}</td>
                  <td className="px-4 py-3">{item.section}</td>
                  <td className="px-4 py-3">{item.teacher}</td>

                  {/* TIMETABLE */}
                  <td className="px-4 py-3">
                    <button
                      onClick={() => navigate(`/class/${item.id}/timetable`)}
                      className="text-sm font-medium text-[var(--primary)]
                      hover:underline"
                    >
                      View Timetable
                    </button>
                  </td>
                      <td className="px-4 py-3">{item.desc}</td>

                  {/* ACTIONS */}
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-4">
                      <button
                        onClick={() => navigate(`/class/${item.id}`)}
                        className="text-zinc-500 hover:text-[var(--primary)]"
                      >
                        View
                      </button>

                      <button
                        onClick={() => navigate(`/class/${item.id}/edit`)}
                        className="text-zinc-500 hover:text-green-600"
                      >
                        Edit
                      </button>

                      <button className="text-zinc-500 hover:text-red-600">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {/* EMPTY STATE */}
              {classes.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-4 py-8 text-center text-zinc-400"
                  >
                    No classes found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
