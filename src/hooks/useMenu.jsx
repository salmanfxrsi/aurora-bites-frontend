import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const useMenu = (limit) => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/menu?limit=${limit}`
        );
        setMenu(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchMenu();
  }, [limit]);
  return { menu, loading };
};
export default useMenu;
