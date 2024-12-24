import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate, createSearchParams } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css";

const Category = () => {
  const navigate = useNavigate();
  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  };
  return (
    <div className="bg-white m-3 mt-12 pt-3 pb-3">
      <div className="text-2xl font-semibold p-5">Shop By Categories</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        loop={true}
      >
        <SwiperSlide
          onClick={() => searchCategory("Deals")}
          className="cursor-pointer"
        >
          <img src={"../assets/category_0.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Amazon")}
          className="cursor-pointer"
        >
          <img src={"../assets/category_1.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Fashion")}
          className="cursor-pointer"
        >
          <img src={"../assets/category_2.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Computers")}
          className="cursor-pointer"
        >
          <img src={"../assets/category_3.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Home")}
          className="cursor-pointer"
        >
          <img src={"../assets/category_4.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Mobiles")}
          className="cursor-pointer"
        >
          <img src={"../assets/category_5.jpg"} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
