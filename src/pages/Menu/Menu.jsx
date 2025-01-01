
import SectionBanner from "../../components/SectionBanner";
import OurMenuImage from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle";

const Menu = () => {
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
      <section className="py-24">
        <SectionTitle
          title="---Don't miss---"
          subtitle="TODAY'S OFFER"
        ></SectionTitle>
      </section>
    </div>
  );
};
export default Menu;
