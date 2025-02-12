import { Link, useNavigate } from "react-router-dom";
import registrationImage from "../../assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import GoogleLoginButton from "../../components/GoogleLoginButton";

const Registration = () => {
  const { signUp, setUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    signUp(email, password)
      .then(async (result) => {
        setUser(result.user);
        // updating user profile
        updateUserProfile(name, image).then(async () => {
          const userInfo = {
            name,
            image,
            email,
          };
          await axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              setUser({ ...result.user, displayName: name, photoURL: image });
              toast.success("Registration Successful");
              navigate("/");
            }
          });
        });
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
                  Photo URL
                </span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                name="image"
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
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
};

export default Registration;
