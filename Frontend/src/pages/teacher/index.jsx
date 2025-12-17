import Breadcrumbs from "../../components/breadCrums/breadcrums";
import TeacherFilter from "../../components/filterBar";
import TeacherTable from "../../components/table";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const students = [
    {
      roll: "0021",
      name: "Mark Willy",
      gender: "Male",
      class: "2",
      section: "A",
      parent: "Jack Sparrow",
      address: "TA-107 Newyork",
      dob: "02/05/2001",
      phone: "+123 9988568",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      roll: "0022",
      name: "Jessia Rose",
      gender: "Female",
      class: "1",
      section: "A",
      parent: "Maria Jamans",
      address: "59 Australia, Sydney",
      dob: "02/05/2001",
      phone: "+123 9988568",
      email: "kazifahim93@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
  ];
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <Breadcrumbs />

        <button
          onClick={() => navigate("/teacher/create")}
          className=" px-12 py-3 rounded-md  bg-(--secondary) text-white font-semibold text-lg hover:bg-(--primary) cursor-pointer transition"
        >
          Create
        </button>
      </div>

      <div className="bg-white rounded-md shadow-sm">
        <TeacherFilter />
        <div>
          <TeacherTable data={students} />
        </div>
      </div>
    </div>
  );
}
