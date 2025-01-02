import { Link, useNavigate } from "react-router-dom";
import registrationImage from "../../assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
  const { signUp, setUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // signUp with email and password
    signUp(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("SignUp Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // signIn with google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        toast.success("SignUp Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen bg-login">
      <div className="hero-content flex-col lg:flex-row-reverse bg-login p-24 shadow-2xl">
        <div>
          <img src={registrationImage} alt="" />
        </div>
        <div className="card w-full max-w-sm shrink-0 ">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="font-bold text-[2.5rem] text-[#151515] text-center">
              Registration
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-xl text-#444444]">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                autoComplete="off"
                className="input input-bordered bg-[#FFFFFF] rounded-lg border border-[#D0D0D0] font-serif"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-xl text-#444444]">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                autoComplete="off"
                className="input input-bordered bg-[#FFFFFF] rounded-lg border border-[#D0D0D0] font-serif"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-semibold text-xl text-#444444]">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="w-full py-3 text-white text-xl font-bold bg-[#D1A054B3] rounded-lg">
                Sign Up
              </button>
            </div>
          </form>
          <h1 className="text-center font-serif text-xl font-medium text-[#D1A054]">
            Old here?{" "}
            <Link to="/login" className="font-bold">
              Login Now
            </Link>
          </h1>
          <h2 className="font-serif text-center mt-3 text-xl font-medium text-[#444444]">
            Or sign in with
          </h2>
          {/* Google Login Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-[320px] mt-4 mx-auto flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-gray-100"
          >
            <FcGoogle size={24} />
            <span className="text-gray-700 font-medium">Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
