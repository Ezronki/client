import { Outlet } from "react-router-dom";
import bgImage from "../../assets/tuts/back.avif"; // adjust the path as needed

function AuthLayout() {
  return (
    <div
      className="flex flex-1 items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Outlet />
    </div>
  );
}

export default AuthLayout;
