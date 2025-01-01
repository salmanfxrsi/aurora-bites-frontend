/* eslint-disable react/prop-types */
const FoodCard = ({ food }) => {
  const { name, recipe, image, price } = food;
  return (
    <div className="w-[648px] flex justify-between">
      <div>
        <img
          className="rounded-tr-[200px] rounded-b-[200px] w-[118px] h-[104px]"
          src={image}
          alt=""
        />
      </div>
      <div className="ml-8">
        <h1 className="text-xl text-[#151515] mb-2">
          {name}------------------
        </h1>
        <p className="font-serif text-[#737373]">{recipe}</p>
      </div>
      <div>
        <p className="text-xl text-[#BB8506]">${price}</p>
      </div>
    </div>
  );
};
export default FoodCard;
