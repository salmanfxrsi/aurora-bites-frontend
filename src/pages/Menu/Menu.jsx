import SectionBanner from "../../components/SectionBanner";
import OurMenuImage from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle";
import desertImage from "../../assets/menu/dessert-bg.jpeg";
import soupImage from "../../assets/menu/soup-bg.jpg";
import saladImage from "../../assets/menu/salad-bg.jpg";
import pizzaImage from "../../assets/menu/pizza-bg.jpg";
import useMenu from "../../hooks/useMenu";
import { Link } from "react-router-dom";
import FoodCard from "../../components/FoodCard";
import ItemsCategory from "./ItemsCategory";

const Menu = () => {
  const { menu: popularMenu } = useMenu("popular", null);
  const { menu: dessertsMenu } = useMenu("dessert", null);
  const { menu: soupsMenu } = useMenu("soup", null);
  const { menu: pizzasMenu } = useMenu("salad", null);
  const { menu: saladsMenu } = useMenu("pizza", null);
  return (
    <div>
      {/* Banner */}
      <section>
        <SectionBanner
          image={OurMenuImage}
          heading="OUR MENU"
          description="Would you like to try a dish?"
        ></SectionBanner>
      </section>
      {/* Toady's Offer */}
      <section className="py-24 container mx-auto">
        <SectionTitle
          title="---Don't miss---"
          subtitle="TODAY'S OFFER"
        ></SectionTitle>
        <div className="grid grid-cols-2">
          {popularMenu.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
        <Link
          to="/order-food"
          className="py-5 px-8 border-b-[3px] rounded-lg border-[#1F2937] font-medium text-xl mx-auto block text-center w-[400px] mt-8"
        >
          ORDER YOUR FAVORITE FOOD
        </Link>
      </section>
      {/* Deserts Section */}
      <section className="pb-24">
        <ItemsCategory
          image={desertImage}
          items={dessertsMenu}
          category="Desserts"
          description="Desserts are sweet treats enjoyed at the end of a meal or as a standalone indulgence."
        ></ItemsCategory>
      </section>
      {/* Deserts Section */}
      <section className="pb-24">
        <ItemsCategory
          image={pizzaImage}
          items={pizzasMenu}
          category="Pizzas"
          description="Pizza is a globally loved dish made with a flat, round dough base topped with a rich tomato sauce, gooey cheese, and a variety of toppings like vegetables, meats, and herbs."
        ></ItemsCategory>
      </section>
      {/* Deserts Section */}
      <section className="pb-24">
        <ItemsCategory
          image={saladImage}
          items={saladsMenu}
          category="Salads"
          description="Salad is a fresh and nutritious dish made from a mix of vegetables, fruits, proteins, or grains, often seasoned with dressings and herbs. "
        ></ItemsCategory>
      </section>
      {/* Soups Section */}
      <section className="pb-24">
        <ItemsCategory
          image={soupImage}
          items={soupsMenu}
          category="Soups"
          description="Soup is a comforting and versatile dish made by simmering ingredients like vegetables, meats, beans, or grains in a flavorful broth. It can be served hot or cold, depending on the recipe, and ranges from light and clear broths to hearty, creamy varieties."
        ></ItemsCategory>
      </section>
    </div>
  );
};
export default Menu;
