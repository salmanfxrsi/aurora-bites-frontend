import SectionTitle from "../../../components/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
// Import slider from assets
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
const OrderOnline = () => {
  return (
    <div className="py-20">
      <SectionTitle
        subtitle="---From 11:00am to 10:00pm---"
        title="ORDER ONLINE"
      ></SectionTitle>
      <section className="container mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} />
            <h1 className="text-center text-white text-[2rem] -mt-16 mr-24">
              SALADS
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} />
            <h1 className="text-center text-white text-[2rem] -mt-16 mr-24">
              PIZZAS
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} />
            <h1 className="text-center text-white text-[2rem] -mt-16 mr-24">
              COFFEES
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} />
            <h1 className="text-center text-white text-[2rem] -mt-16 mr-24">
              CAKES
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} />
            <h1 className="text-center text-white text-[2rem] -mt-16 mr-24">
              DESERTS
            </h1>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};
export default OrderOnline;
