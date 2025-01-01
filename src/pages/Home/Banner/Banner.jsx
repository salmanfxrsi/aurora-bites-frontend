import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide_one from "../../../assets/home/01.jpg";
import slide_two from "../../../assets/home/02.jpg";
import slide_three from "../../../assets/home/03.png";
import slide_four from "../../../assets/home/04.jpg";
import slide_five from "../../../assets/home/05.png";
import slide_six from "../../../assets/home/06.png";
const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={slide_one} />
      </div>
      <div>
        <img src={slide_two} />
      </div>
      <div>
        <img src={slide_three} />
      </div>
      <div>
        <img src={slide_four} />
      </div>
      <div>
        <img src={slide_five} />
      </div>
      <div>
        <img src={slide_six} />
      </div>
    </Carousel>
  );
};
export default Banner;
