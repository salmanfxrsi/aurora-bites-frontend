import Banner from "./Banner/Banner";
import Information from "./Information/Information";
import OrderOnline from "./OrderOnline/OrderOnline";
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
    </div>
  );
};

export default Home;
