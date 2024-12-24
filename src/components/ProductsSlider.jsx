import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { Link } from "react-router-dom";

const ProductsSlider = () => {
  return (
    <div className="bg-white m-4">
      <div className="text-2xl font-semibold p-5">Best Sellers</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="ml-4 mr-4"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <Link to={`/products/${i}`}>
            <img src={`../assets/product_${i}_small.jpg`} alt="" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
