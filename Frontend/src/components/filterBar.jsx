export default function FilterBar() {
  return (
    <div className=" p-4 flex flex-col md:flex-row gap-4 items-center">
      
      <input
        type="text"
        placeholder="Search by Roll ..."
        className="w-full md:w-1/3 px-4 py-3 rounded-md bg-[#F5F5F5] outline-none text-sm"
      />

      <input
        type="text"
        placeholder="Search by Name ..."
        className="w-full md:w-1/3 px-4 py-3 rounded-md bg-[#F5F5F5] outline-none text-sm"
      />
      <input
        type="text"
        placeholder="Search by Class ..."
        className="w-full md:w-1/3 px-4 py-3 rounded-md bg-[#F5F5F5] outline-none text-sm"
      />

      {/* Search Button */}
      <button className="w-full md:w-auto px-8 py-3 rounded-md border-[var(--primary)]  text-[var(--primary)] border-2 hover:text-white font-semibold text-sm hover:bg-(--primary) cursor-pointer transition">
        SEARCH
      </button>

    </div>
  );
}
