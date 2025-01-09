import SectionTitle from "../../components/SectionTitle";
import useCart from "../../hooks/useCart";

const MyCart = () => {
  const [data] = useCart()
  console.log(data)

  return (
    <div>
      {/* Cart Title */}
      <div className="mx-auto">
        <SectionTitle subtitle="MY CART" title="Wanna Add More"></SectionTitle>
      </div>
    </div>
  );
};

export default MyCart;
