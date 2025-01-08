import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

/* eslint-disable react/prop-types */
const FoodCardWithButton = ({ food }) => {
  const { _id, name, recipe, image, price } = food;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        recipe,
        image,
        price,
      };
      try{
        axiosSecure.post('/carts', cartItem)
        toast.success(`${name} Added To Cart`)
      }catch(error){
        toast.error(error.message)
      }
    } else {
      toast.error("SignIn To Add To Cart");
      navigate('/login', { state: { from: location } })
      return;
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt={name} />
      </figure>
      <p className="absolute right-0 mt-4 mr-4 bg-[#111827] px-4 py-2 text-white font-semibold">
        $ {price}
      </p>
      <div className="card-body">
        <h2 className="text-center text-[#151515] font-semibold text-2xl mb-2">
          {name}
        </h2>
        <p className="text-[#151515] mb-6">{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddToCart}
            className="btn btn-warning mx-auto btn-outline"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
export default FoodCardWithButton;
