import Breadcrumbs from "../../components/breadCrums/breadcrums";
import { useNavigate } from "react-router-dom";
import AttendenceFilter from "../../components/AttendenceFilter";
export default function Index() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-row justify-between items-center mb-4">
        <Breadcrumbs />
      </div>
      <div className="bg-white rounded-md shadow-sm">
        <AttendenceFilter />
      </div>
    </div>
  );
}
