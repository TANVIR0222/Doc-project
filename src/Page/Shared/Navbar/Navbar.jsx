import logo from "../../../assets/Logo/Group 1.png";
import logo2 from "../../../assets/Logo/Doc House.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLink = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"appointment"}>Appointment</Link>
      </li>
      <li>
        <Link to={"/login"}>Appointment</Link>
      </li>

      {user ? (
        <>
          {" "}
          <input onClick={handleLogout} type="submit" value="Log Out" />{" "}
        </>
      ) : (
        <li>
          <Link to="/login"><input type="submit" value="Log in" /></Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10  mx-auto max-w-screen-xl	text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            ></div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>

          {/* logo */}
          <a className=" mx-5 btn btn-ghost text-xl">
            <img src={logo} alt="" />
            <img src={logo2} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
