import FoodCardWithButton from "../../../components/FoodCardWithButton";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ChefRecommends = () => {
  const { menu } = useMenu("popular", 3);
  return (
    <div>
      <SectionTitle
        subtitle="---Should Try---"
        title="CHEF RECOMMENDS"
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-6">
        {menu.map((food) => (
          <FoodCardWithButton key={food._id} food={food}></FoodCardWithButton>
        ))}
      </div>
    </div>
  );
};
export default ChefRecommends;
