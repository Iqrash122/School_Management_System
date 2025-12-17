import Breadcrumbs from "../../components/breadCrums/breadcrums";
import AccountFilter from "../../components/AttendenceFilter";
import AccountsTable from "../../components/AccountsTable";

export default function Index() {
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
      </div>
      <div className="bg-white rounded-md shadow-sm">
        <AccountFilter />
        <div className="bg-white rounded-md shadow-sm mt-4">
          <AccountsTable data={accountsData} />
        </div>
      </div>
    </div>
  );
}
