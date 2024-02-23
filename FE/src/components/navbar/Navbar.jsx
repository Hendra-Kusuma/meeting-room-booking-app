import Button from "../button/button";
import { Link } from "react-router-dom";

function HandleLogout() {
  localStorage.removeItem("token");
  window.location.href = "/login";
  alert("Logout berhasil");
}

function Navbar() {
  return (
    <div className="text-xl flex h-13 justify-between bg-blue-400 text-white items-center px-8">
      <div>Hello</div>
      <div className="flex space-x-4 justify-center items-center">
        <Link to="/users" className="text-white hover:text-gray-200">
          User
        </Link>
        <Link to="/room-usage" className="text-white hover:text-gray-200">
          Room Usage
        </Link>
        <Link to="/rooms" className="text-white hover:text-gray-200">
          Rooms
        </Link>
        <Link to="/clients" className="text-white hover:text-gray-200">
          Clients
        </Link>
        <Button color="bg-blue-800" text="Logout" onClick={HandleLogout} />
      </div>
    </div>
  );
}

export default Navbar;
