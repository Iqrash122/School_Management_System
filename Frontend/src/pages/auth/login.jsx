import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
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
          <div className="md:w-1/2 w-full bg-[#1B7C6C] flex items-center justify-center relative">
            <div className="bg-white w-full max-w-sm rounded-xl shadow-xl p-8">
              <input
                type="text"
                placeholder="Enter User Name"
                className="w-full mb-4 px-4 py-3 rounded bg-gray-100 outline-none"
              />

              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full mb-2 px-4 py-3 rounded bg-gray-100 outline-none"
              />

              <div className="text-right mb-4">
                <span className="text-sm text-blue-600 cursor-pointer">
                  Forgot your password?
                </span>
              </div>

              {/* SIGN IN */}
              <button
                className="w-full py-3 mb-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white"
              >
                SIGN IN
              </button>

              {/* REGISTER */}
              <button
                onClick={() => navigate("/signup")}
                className="w-full py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white"
              >
                REGISTER
              </button>
            </div>

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
