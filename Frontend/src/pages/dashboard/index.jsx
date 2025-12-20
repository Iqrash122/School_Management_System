import { useEffect, useState } from "react";
import { Users, UserCheck, Layers, BookOpen } from "lucide-react";
import DashBoardCard from "../../components/cards/dashboardCard";
import Breadcrumbs from "../../components/breadCrums/breadcrums";

export default function Index() {
  const [counts, setCounts] = useState({
    students: 0,
    teachers: 0,
    classes: 0,
    subjects: 0,
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard/counts")
      .then((res) => res.json())
      .then(setCounts);
  }, []);

  return (
    <div>
      <Breadcrumbs />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <a href="/students">
          <DashBoardCard
            title="Students"
            count={counts.students}
            color="green"
            icon={<Users size={22} />}
          />
        </a>

        <a href="/teacher">
          <DashBoardCard
            title="Teachers"
            count={counts.teachers}
            color="blue"
            icon={<UserCheck size={22} />}
          />
        </a>

        <a href="class">
          <DashBoardCard
            title="Classes"
            count={counts.classes}
            color="red"
            icon={<Layers size={22} />}
          />
        </a>

        <a href="subjects">
          <DashBoardCard
            title="Subjects"
            count={counts.subjects}
            color="orange"
            icon={<BookOpen size={22} />}
          />
        </a>
      </div>
    </div>
  );
}
