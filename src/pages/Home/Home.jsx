import Banner from "./Banner/Banner";
import CallUs from "./Call Us/CallUs";
import ChefRecommends from "./Chef Recommends/ChefRecommends";
import Information from "./Information/Information";
import OrderOnline from "./OrderOnline/OrderOnline";
import Testimonials from "./Testimonials/Testimonials";
import WellRatedFood from "./Well Rated Food/WellRatedFood";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section className="container mx-auto">
        <OrderOnline></OrderOnline>
      </section>
      <section className="container mx-auto pb-24">
        <Information></Information>
      </section>
      {/* Check It Out From Our Menu - Top Rated Food */}
      <section className="container mx-auto pb-24">
        <WellRatedFood></WellRatedFood>
      </section>
      {/* Call Us */}
      <section className="container mx-auto pb-24">
        <CallUs></CallUs>
      </section>
      {/* Chef Recommends */}
      <section className="container mx-auto pb-24">
        <ChefRecommends></ChefRecommends>
      </section>
      {/* Testimonials */}
      <section className="container mx-auto pb-24">
        <Testimonials></Testimonials>
      </section>
    </div>
  );
};

export default Home;
