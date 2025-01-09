import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../hooks/useAxiosPublic";

const GoogleLoginButton = () => {
  const { googleSignIn, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const from = location?.state?.from?.pathname || "/";

  // signIn with google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(async (result) => {
        const userInfo = {
          name: result.user.displayName,
          image: result.user.photoURL,
          email: result.user.email,
        };
        await axiosPublic.post("users", userInfo)
        setUser(result.user);
        toast.success("SignUp Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-[320px] mt-4 mx-auto flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-gray-100"
    >
      <FcGoogle size={24} />
      <span className="text-gray-700 font-medium">Login with Google</span>
    </button>
  );
};

export default GoogleLoginButton;
