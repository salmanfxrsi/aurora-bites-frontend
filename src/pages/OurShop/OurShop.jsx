import OurShopImage from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCardWithButton from "../../components/FoodCardWithButton";
import SectionBanner from "../../components/SectionBanner";

const OurShop = () => {
  const { menu: dessertsMenu } = useMenu("dessert", null);
  const { menu: soupsMenu } = useMenu("soup", null);
  const { menu: pizzasMenu } = useMenu("salad", null);
  const { menu: saladsMenu } = useMenu("pizza", null);
  const { menu: drinksMenu } = useMenu("drinks", null);
  return (
    <div>
      {/* Page Banner */}
      <SectionBanner
        image={OurShopImage}
        heading="OUR SHOP"
        description="Would you like to try a dish?"
      ></SectionBanner>
      {/* Tab Section */}
      <section className="container mx-auto my-24">
        <Tabs>
          <TabList className="flex justify-center">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Deserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          {/* Salads Tab */}
          <TabPanel>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {saladsMenu.map((salad) => (
                <FoodCardWithButton
                  key={salad._id}
                  food={salad}
                ></FoodCardWithButton>
              ))}
            </div>
          </TabPanel>
          {/* Pizzas Tab */}
          <TabPanel>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {pizzasMenu.map((pizza) => (
                <FoodCardWithButton
                  key={pizza._id}
                  food={pizza}
                ></FoodCardWithButton>
              ))}
            </div>
          </TabPanel>
          {/* Soups Tab */}
          <TabPanel>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {soupsMenu.map((soup) => (
                <FoodCardWithButton
                  key={soup._id}
                  food={soup}
                ></FoodCardWithButton>
              ))}
            </div>
          </TabPanel>
          {/* Deserts Tab */}
          <TabPanel>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {dessertsMenu.map((dessert) => (
                <FoodCardWithButton
                  key={dessert._id}
                  food={dessert}
                ></FoodCardWithButton>
              ))}
            </div>
          </TabPanel>
          {/* Drinks Tab */}
          <TabPanel>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {drinksMenu.map((drink) => (
                <FoodCardWithButton
                  key={drink._id}
                  food={drink}
                ></FoodCardWithButton>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};
export default OurShop;