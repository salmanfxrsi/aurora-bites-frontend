import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoCodeReview } from "react-icons/go";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import useReviews from "../../../hooks/useReviews";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const Testimonials = () => {
  const { reviews } = useReviews();
  return (
    <div>
      <SectionTitle
        subtitle="---What Our Clients Say---"
        title="TESTIMONIALS"
      ></SectionTitle>
      <section>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <section className="mx-24">
                <GoCodeReview className="text-8xl mx-auto mb-6" />
                <Rating
                  className="mx-auto mb-6"
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                />
                <p className="text-center text-xl text-[#444444]">
                  {review?.details}
                </p>
                <h1 className="text-center text-[2rem] text-[#CD9003] font-medium mt-2">
                  {review?.name}
                </h1>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};
export default Testimonials;