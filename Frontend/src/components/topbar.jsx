export default function TopBar() {
  return (
    <header className="w-full h-18 bg-white shadow-xl  flex items-center justify-between px-6">
      {/* LEFT : SEARCH */}
      <div className="flex items-center gap-3 w-full max-w-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.85-5.4a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z"
          />
        </svg>

        <input
          type="text"
          placeholder="Find Something . . ."
          className="w-full outline-none text-sm s placeholder-gray-400"
        />
      </div>

      {/* RIGHT : ACTIONS */}
      <div className="flex items-center gap-6">
        {/* USER INFO */}
        <div className="text-right hidden md:block">
          <p className="text-sm font-semibold text-gray-700">Stevne Zone</p>
          <p className="text-xs text-gray-400">Admin</p>
        </div>

        {/* AVATAR */}
        <div className="relative">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-10 h-10 rounded-full border"
          />
        </div>

        {/* MAIL */}
        <div className="relative cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>

          <span className="absolute -top-2 -right-2 w-5 h-5 text-xs bg-emerald-500 text-white rounded-full flex items-center justify-center">
            5
          </span>
        </div>

        {/* NOTIFICATIONS */}
        <div className="relative cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0a3 3 0 01-6 0"
            />
          </svg>

          <span className="absolute -top-2 -right-2 w-5 h-5 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
            8
          </span>
        </div>

        {/* LANGUAGE */}
        <div className="flex items-center gap-1 cursor-pointer text-sm text-gray-600">
          🌐 EN
        </div>
      </div>
    </header>
  );
}
