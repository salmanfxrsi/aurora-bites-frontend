import FoodCard from "../../../components/FoodCard";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router";
const WellRatedFood = () => {
  const { menu } = useMenu("popular", null);
  return (
    <div>
      <SectionTitle
        subtitle="---Check it out---"
        title="From Our Menu"
      ></SectionTitle>
      <section className="grid grid-cols-2 gap-8">
        {menu.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </section>
      <Link
        to="/menu"
        className="py-5 px-8 mx-auto block mt-8 font-sans text-xl border-b-[3px] rounded-lg border-black w-[250px] text-center"
      >
        VIEW FULL MENU
      </Link>
    </div>
  );
};
export default WellRatedFood;
