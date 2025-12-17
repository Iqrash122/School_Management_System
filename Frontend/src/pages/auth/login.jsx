import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-(--text) flex items-center justify-center">
      <div className="w-full max-w-7xl bg-transparent px-4">
        <div className="flex flex-col md:flex-row min-h-[85vh] overflow-hidden rounded-lg">
          {/* LEFT PANEL */}
          <div className="md:w-1/2 w-full bg-(--primary) flex flex-col items-center justify-center text-white px-8 py-12">
            <img src={Logo} alt="School Logo" />
            <h1 className="text-[70px] font-bold">WELCOME</h1>
          </div>

          {/* RIGHT PANEL */}
          <div className="md:w-1/2 w-full bg-(--primary) flex items-center justify-center relative">
            <div className="bg-white w-full max-w-sm rounded-xl shadow-xl p-8">
              <input
                type="text"
                placeholder="Enter User Name"
                className="w-full mb-4 px-4 py-3 rounded bg-gray-100 outline-none focus:bg-white focus:ring-2 focus:ring-(--primary) transition-all duration-200"
              />

              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full mb-2 px-4 py-3 rounded bg-gray-100 outline-none  focus:bg-white focus:ring-2 focus:ring-(--primary) transition-all duration-200"
              />

              <div className="text-right mb-4">
                <span className="text-sm text-(--primary) cursor-pointer hover:underline">
                  Forgot your password?
                </span>
              </div>

              {/* SIGN IN */}
              <button
                onClick={() => navigate("./dashboard")}

                className="w-full py-3 mb-4 border-2 border-(--secondary) cursor-pointer hover:text-(--secondary) hover:bg-transparent  font-semibold rounded-lg bg-(--secondary) text-white"
              >
                SIGN IN
              </button>

              {/* REGISTER */}
              <button
                onClick={() => navigate("/signup")}
                className="w-full py-3 mb-4 border-2 border-(--secondary) cursor-pointer hover:text-(--secondary) hover:bg-transparent  font-semibold rounded-lg bg-(--secondary) text-white"
              >
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
