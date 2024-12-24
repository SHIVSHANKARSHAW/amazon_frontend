import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        className="h-[50%]"
        navigation={true}
        autoplay={{
            delay:8000
        }}
        modules={[Navigation,Autoplay]}
      >
        <SwiperSlide className="bg-black ">
            <video controls autoPlay={true}  muted="muted" loop={true}>
                <source src={"../assets/carousel_vid.mp4"} type="video/mp4" />
            </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../assets/carousel_1.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../assets/carousel_2.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../assets/carousel_3.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../assets/carousel_4.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../assets/carousel_5.jpg"} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900"></div>
    </div>
  );
};

export default Carousel;
