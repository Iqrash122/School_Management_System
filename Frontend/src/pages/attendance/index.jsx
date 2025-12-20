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

        <button
          onClick={() => navigate("/attendance/create")}
          className="px-12 py-3 rounded-md bg-[var(--secondary)]
                text-white font-semibold text-lg hover:bg-[var(--primary)]
                transition-all active:scale-95"
        >
          Create
        </button>
      </div>

      <div className="bg-white rounded-md shadow-sm">
        <AttendenceFilter />
      </div>
    </div>
  );
}
