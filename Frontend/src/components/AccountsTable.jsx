export default function AccountsTable({ data = [] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        {/* TABLE HEAD */}
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Receipt ID
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Student Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Class / Section
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Fee Type
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Amount
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Paid Date
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Status
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody>
          {data.length === 0 && (
            <tr>
              <td
                colSpan="8"
                className="px-4 py-6 text-center text-sm text-zinc-500"
              >
                No records found
              </td>
            </tr>
          )}

          {data.map((item) => (
            <tr
              key={item.receiptId}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="px-4 py-3 text-sm">{item.receiptId}</td>
              <td className="px-4 py-3 text-sm font-medium">
                {item.studentName}
              </td>
              <td className="px-4 py-3 text-sm">
                {item.class} / {item.section}
              </td>
              <td className="px-4 py-3 text-sm">{item.feeType}</td>
              <td className="px-4 py-3 text-sm font-semibold">
                Rs. {item.amount}
              </td>
              <td className="px-4 py-3 text-sm">{item.paidDate}</td>

              {/* STATUS */}
              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      item.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }
                  `}
                >
                  {item.status}
                </span>
              </td>

              {/* ACTIONS */}
              <td className="px-4 py-3 text-center">
                <div className="flex justify-center gap-3 text-sm">
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                  <button className="text-zinc-600 hover:underline">
                    Print
                  </button>
                  <button className="text-emerald-600 hover:underline">
                    Edit
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
