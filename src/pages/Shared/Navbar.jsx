import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <NavLink to="/" className="text-white font-bold text-lg">
        Home
      </NavLink>
      <NavLink to="/menu" className="text-white font-bold text-lg">
        Menu
      </NavLink>
      <NavLink to="/our-shop" className="text-white font-bold text-lg">
        Our Shop
      </NavLink>
    </>
  );

  const handleSignOut = () => {
    signOut()
      .then((result) => {
        toast.success("Sign Out Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-black fixed z-10 w-full">
      <div className="navbar container mx-auto">
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
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </div>
          </div>
          <div>
            <p className="text-[2rem] font-black text-white">AURORA BITES</p>
            <p className="font-bold text-2xl text-white">RESTAURANT</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal flex gap-4">{links}</div>
        </div>
        <div className="navbar-end">
          {user && (
            <button onClick={handleSignOut} className="btn btn-warning">
              Sign Out
            </button>
          )}
          {!user && (
            <Link to="/login" className="btn btn-warning">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
