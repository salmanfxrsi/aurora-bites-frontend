import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/reviews`
        );
        setReviews(data);
        setLoading(false)
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchMenu();
  }, []);
  return { reviews, loading };
};
export default useReviews;