import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const logOutBtn = () => {
    logOut().then(() => {
      toast("LogOut Successfully");
    });
  };
  return (
    <div className="z-20 relative">
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
                  to="/contactus"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact Us
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
                  to="/blog"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Blog
                </NavLink>
              </li>
              {user ? (
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
          <Link
            to={"/"}
            className="btn btn-ghost text-base md:text-2xl  font-bold gap-0"
          >
            Navana<span className="text-[#00CC00]">Group</span>
          </Link>
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
                to="/contactus"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact Us
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
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Blog
              </NavLink>
            </li>
            {user ? (
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
          {user ? (
            <div className="avatar flex items-center gap-2">
              <div className="w-9 md:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 m-2 group hover:bg-gray-300">
                <img
                  className="rounded-full w-36 mx-auto"
                  src={
                    user?.photoURL ||
                    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
                <ul className="absolute invisible group-hover:visible">
                  <li className="bg-slate-200 p-1 rounded-md">
                    {user?.displayName || "Muhammad Sefat"}
                  </li>
                </ul>
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
