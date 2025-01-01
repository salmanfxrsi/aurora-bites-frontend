import Banner from "./Banner/Banner";
import OrderOnline from "./OrderOnline/OrderOnline";

const Home = () => {
    return (
        <div>
            <section><Banner></Banner></section>
            <section><OrderOnline></OrderOnline></section>
        </div>
    );
};

export default Home;