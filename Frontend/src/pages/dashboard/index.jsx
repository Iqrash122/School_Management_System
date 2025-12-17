import DashBoardCard from "../../components/cards/dashboardCard";
import Breadcrumbs from "../../components/breadCrums/breadcrums";

export default function Index() {
  return (
    <div>
      <Breadcrumbs />

      <div className="grid grid-cols-4 gap-6">
        <DashBoardCard title="Students" count="150000" color="green" />

        <DashBoardCard title="Teachers" count="1200" color="blue" />

        <DashBoardCard title="Classes" count="15" color="red" />

        <DashBoardCard title="Subjects" count="85" color="orange" />
      </div>
    </div>
  );
}
