import { RiDeleteBin5Line } from "react-icons/ri";
import SectionTitle from "../../components/SectionTitle";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id, name) => {
    try {
      await axiosSecure.delete(`/cart/${id}`);
      refetch();
      toast.success(`${name} Deleted`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      {/* Cart Title */}
      <div className="mx-auto">
        <SectionTitle subtitle="MY CART" title="Wanna Add More"></SectionTitle>
      </div>
      <div className="bg-white p-[50px] px-[151px]">
        <div className="flex justify-between">
          <h1 className="text-[#151515] text-[2rem] font-bold">
            TOTAL ORDERS: {cart.length}
          </h1>
          <h1 className="text-[#151515] text-[2rem] font-bold">
            TOTAL ORDERS: {totalPrice}
          </h1>
          <button className="py-[14px] px-[17px] rounded-lg bg-[#D1A054] text-white text-xl font-mono">
            PAY
          </button>
        </div>
        {/* Table */}
        <div className="overflow-x-auto mt-[38px]">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054]">
              <tr className="text-white font-semibold">
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item?.image} alt={item?.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h1>{item?.name}</h1>
                  </td>
                  <td>
                    <h1>{item?.price}</h1>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id, item.name)}
                      className="btn bg-[#B91C1C] text-white text-xl"
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
