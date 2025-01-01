/* eslint-disable react/prop-types */
import FoodCard from "../../components/FoodCard";
import SectionBanner from "../../components/SectionBanner";
import { Link } from "react-router";
const ItemsCategory = ({ image, items, category, description }) => {
  return (
    <div>
      <SectionBanner
        image={image}
        heading={category}
        description={description}
      ></SectionBanner>
      <div className="grid grid-cols-2 mt-28 container mx-auto gap-6">
        {items.map((item) => (
          <FoodCard key={item._id} food={item}></FoodCard>
        ))}
      </div>
      <Link
        to={`/our-shop/${category}`}
        className="py-5 px-8 border-b-[3px] rounded-lg border-[#1F2937] font-medium text-xl mx-auto block text-center w-[400px] mt-8"
      >
        ORDER YOUR FAVORITE FOOD
      </Link>
    </div>
  );
};
export default ItemsCategory;
