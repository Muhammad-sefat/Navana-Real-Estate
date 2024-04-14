import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const logOutBtn = () => {
    logOut().then(() => {
      console.log("LogOut Successfully");
    });
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/updateprofile"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Update Profile
                </NavLink>
              </li>
              {user?.email ? (
                <li>
                  <NavLink
                    to="/userProfile"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    User Profile
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl  font-bold">
            Navana<span className="text-[#00CC00] gap-0">Group</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/updateprofile"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Update Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact Us
              </NavLink>
            </li>
            {user?.email ? (
              <li>
                <NavLink
                  to="/userProfile"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  User Profile
                </NavLink>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="avatar flex items-center gap-2">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 m-2">
                {user?.photoURL || (
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                )}
              </div>
              <a onClick={logOutBtn} className="btn font-semibold">
                Logout
              </a>
            </div>
          ) : (
            <NavLink to={"/login"}>
              <a className="btn font-semibold">Login</a>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
