import slide1 from "../../assets/slide-01.jpg";
import slide2 from "../../assets/slide-02.jpg";
import slide3 from "../../assets/slide-03.jpg";
import slide4 from "../../assets/slide-04.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="mt-20 md:mt-0">
      <Swiper navigation={true} modules={[Navigation]} loop={true}>
        <SwiperSlide>
          <div className="py-5">
            <img className="w-full h-[90vh] rounded-md" src={slide1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="py-5">
            <img className="w-full h-[90vh] rounded-md" src={slide2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-5">
            <img className="w-full h-[90vh] rounded-md" src={slide3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-5">
            <img className="w-full h-[90vh] rounded-md" src={slide4} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
