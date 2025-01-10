import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";
import toast from "react-hot-toast";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUsersGear } from "react-icons/fa6";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("users");
      return res.data;
    },
  });

  const handleUserRole = async (id) => {
    try {
      await axiosSecure.patch(`/users/admin/${id}`);
      refetch();
      toast.success(`${name} Deleted`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async (id, name) => {
    try {
      await axiosSecure.delete(`/users/${id}`);
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
        <SectionTitle
          subtitle="All Users"
          title="Manage All Users"
        ></SectionTitle>
      </div>
      <div className="bg-white p-[50px] px-[151px]">
        <div className="flex justify-between">
          <h1 className="text-[#151515] text-[2rem] font-bold">
            TOTAL USERS: {users.length}
          </h1>
        </div>
        {/* Table */}
        <div className="overflow-x-auto mt-[38px]">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054]">
              <tr className="text-white font-semibold">
                <th></th>
                <th>User Photo</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Role</th>
                <th>Delete User</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={user?.image} alt={user?.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h1>{user?.name}</h1>
                  </td>
                  <td>
                    <h1>{user?.email}</h1>
                  </td>
                  {/* User Role Change Button */}
                  <th>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleUserRole(user._id)}
                        className="btn bg-[#D1A054] text-white text-xl"
                      >
                        <FaUsersGear />
                      </button>
                    )}
                  </th>
                  {/* Delete User Button */}
                  <th>
                    {user.role === "admin" ? (
                      "Contact With Owner To Delete"
                    ) : (
                      <button
                        onClick={() => handleDelete(user._id, user.name)}
                        className="btn bg-[#B91C1C] text-white text-xl"
                      >
                        <RiDeleteBin5Line />
                      </button>
                    )}
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

export default AllUsers;
