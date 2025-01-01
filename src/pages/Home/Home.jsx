import Banner from "./Banner/Banner";
import Information from "./Information/Information";
import OrderOnline from "./OrderOnline/OrderOnline";

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
    </div>
  );
};

export default Home;
