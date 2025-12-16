import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F3D3E] flex items-center justify-center">
      <div className="w-full max-w-7xl bg-transparent px-4">
        <div className="flex flex-col md:flex-row min-h-[85vh] overflow-hidden rounded-lg">
          {/* LEFT PANEL */}
          <div className="md:w-1/2 w-full bg-[#1B7C6C] flex flex-col items-center justify-center text-white px-8 py-12">
            <img src={Logo} alt="School Logo" />
            <h1 className="text-[70px] font-bold">WELCOME</h1>
          </div>

          {/* RIGHT PANEL */}
          <div className="md:w-1/2 w-full bg-[#1B7C6C] flex items-center justify-center relative p-6">
            {/* CLOSE */}
            <button
              onClick={() => navigate("/")}
              className="absolute top-4 right-4 w-8 h-8 border border-white text-white rounded hover:bg-white hover:text-black transition"
            >
              ✕
            </button>

            {/* CARD */}
            <div className="bg-white w-full max-w-sm rounded-xl shadow-2xl p-8">
              {/* ROLE */}
              <select className="w-full mb-4 px-4 py-3 bg-gray-100 rounded outline-none">
                <option>Select</option>
                <option>Student</option>
                <option>Academic</option>
                <option>Non Academic</option>
                <option>Parent</option>
                <option>Admin</option>
              </select>

              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full mb-4 px-4 py-3 bg-gray-100 rounded outline-none  focus:bg-white focus:ring-2 focus:ring-blue-600 transition-all duration-200"
              />

              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full mb-4 px-4 py-3 bg-gray-100 rounded outline-none  focus:bg-white focus:ring-2 focus:ring-blue-600 transition-all duration-200"
              />

              <input
                type="password"
                placeholder="Confirm Your Password"
                className="w-full mb-6 px-4 py-3 bg-gray-100 rounded outline-none  focus:bg-white focus:ring-2 focus:ring-blue-600 transition-all duration-200"
              />

              {/* REGISTER BUTTON */}
              <button
                className="w-full py-3 border-2 cursor-pointer border-blue-600 text-blue-600 font-semibold rounded-lg
                hover:bg-blue-600 hover:text-white transition-all duration-200 active:scale-95"
              >
                REGISTER
              </button>
            </div>

            {/* FOOTER TEXT */}
            <div className="absolute bottom-6 text-center text-sm text-white/80">
              School Management System for <br />
              <span className="font-semibold">THE ABC COLLEGE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
