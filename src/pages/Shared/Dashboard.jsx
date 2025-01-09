import { BsShop } from "react-icons/bs";
import { GoCodeReview } from "react-icons/go";
import { IoIosHome } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiReservedFill } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  return (
    <div className="mt-[50px] ml-[35px]">
      {/* Dashboard Heading */}
      <div>
        <h1 className="uppercase font-black text-[#151515] text-2xl">
          Bistro Boss
        </h1>
        <p className="text-[#151515] uppercase font-bold text-lg">Restaurant</p>
      </div>
      {/* Dashboard NavLink */}
      <div className="my-[60px] flex flex-col gap-1">
        <NavLink
          to="dashboard"
          className="flex items-center text-base font-bold gap-1"
        >
          <IoIosHome className="text-xl" />
          <p className="mt-1">User Home</p>
        </NavLink>
        <NavLink
          to="reservation"
          className="flex items-center text-base font-bold gap-1"
        >
          <RiReservedFill className="text-xl" />
          <p className="mt-1">Reservation</p>
        </NavLink>
        <NavLink
          to="payment-history"
          className="flex items-center text-base font-bold gap-1"
        >
          <MdOutlinePayment className="text-xl" />
          <p className="mt-1">Payment History</p>
        </NavLink>
        <NavLink
          to="my-cart"
          className="flex items-center text-base font-bold gap-1"
        >
          <TiShoppingCart className="text-xl" />
          <p className="mt-1">My Cart ({cart.length})</p>
        </NavLink>
        <NavLink
          to="add-review"
          className="flex items-center text-base font-bold gap-1"
        >
          <GoCodeReview className="text-xl" />
          <p className="mt-1">Add Review</p>
        </NavLink>
        <NavLink
          to="my-booking"
          className="flex items-center text-base font-bold gap-1"
        >
          <TbBrandBooking className="text-xl" />
          <p className="mt-1">My Booking</p>
        </NavLink>
      </div>
      <hr />
      {/* Home NavLink */}
      <div className="my-[60px] flex flex-col gap-2">
        <NavLink
          to="/"
          className="flex items-center text-base font-bold gap-1"
        >
          <IoIosHome className="text-xl" />
          <p className="mt-1">Home</p>
        </NavLink>
        <NavLink
          to="/menu"
          className="flex items-center text-base font-bold gap-1"
        >
          <LuMenu className="text-xl" />
          <p className="mt-1">Menu</p>
        </NavLink>
        <NavLink
          to="/our-shop"
          className="flex items-center text-base font-bold gap-1"
        >
          <BsShop className="text-xl" />
          <p className="mt-1">Shop</p>
        </NavLink>
        <NavLink
          to="contact"
          className="flex items-center text-base font-bold gap-1"
        >
          <PiPhoneCallFill className="text-xl" />
          <p className="">Contact</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
