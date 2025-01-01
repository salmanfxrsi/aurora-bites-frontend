/* eslint-disable react/prop-types */
const FoodCardWithButton = ({ food }) => {
  const { name, recipe, image } = food;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-[#151515] font-semibold text-2xl mb-2">
          {name}
        </h2>
        <p className="text-[#151515] mb-6">{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning mx-auto btn-outline">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
export default FoodCardWithButton;
