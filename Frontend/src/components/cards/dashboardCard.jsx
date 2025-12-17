const colorMap = {
  green: {
    bg: "bg-green-300",
    text: "text-green-600",
  },
  blue: {
    bg: "bg-blue-300",
    text: "text-blue-600",
  },
  red: {
    bg: "bg-red-300",
    text: "text-red-600",
  },
   orange: {
    bg: "bg-orange-300",
    text: "text-orange-600",
  },
};

export default function DashBoardCard({ title, count, color = "green", icon }) {
  const selectedColor = colorMap[color] || colorMap.green;

  return (
    <div className="bg-white rounded-md shadow-sm p-4 w-full max-w-sm flex items-center justify-between">
      {/* ICON */}
      <div
        className={`w-[85px] h-[85px] rounded-full flex items-center justify-center ${selectedColor.bg} ${selectedColor.text}`}
      >
        {icon}
      </div>

      {/* TEXT */}
      <div className="flex flex-col text-right">
        <span className="text-md text-zinc-400">{title}</span>
        <span className="text-2xl font-medium">{count}</span>
      </div>
    </div>
  );
}
