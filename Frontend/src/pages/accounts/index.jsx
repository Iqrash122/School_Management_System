import Breadcrumbs from "../../components/breadCrums/breadcrums";
import AccountsTable from "../../components/AccountsTable";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  const accountsData = [
    {
      receiptId: "REC-001",
      studentName: "Ali Khan",
      class: "5",
      section: "A",
      feeType: "Tuition",
      amount: 5000,
      paidDate: "12 Aug 2024",
      status: "Paid",
    },
    {
      receiptId: "REC-002",
      studentName: "Sara Ahmed",
      class: "6",
      section: "B",
      feeType: "Exam",
      amount: 2500,
      paidDate: "-",
      status: "Pending",
    },
  ];

  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-row justify-between items-center mb-4">
        <Breadcrumbs />
        <button
          onClick={() => navigate("/accounts/create")}
          className="
            px-12 py-3 rounded-md
            border-2 border-[var(--secondary)]
            font-semibold
            text-[var(--secondary)]
            transition cursor-pointer
            hover:bg-[var(--secondary)] hover:text-white
          "
        >
          Create Time Table
        </button>
      </div>
      <div className="bg-white rounded-md shadow-sm">
        <div className="bg-white rounded-md shadow-sm mt-4">
          <AccountsTable data={accountsData} />
        </div>
      </div>
    </div>
  );
}
