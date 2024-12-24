import Carousel from "./Carousel";
import HomepageCard from "./HomepageCard";
import Category from "./Category";
import ProductsSlider from "./ProductsSlider";

const Homepage = () => {
  return (
    <div className="bg-amazonclone-background text-center">
      <div className="bg-transparent min-w-[1000px] max-w-[1500px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomepageCard
            title={"We've a Surprise for You .."}
            img={"../assets/home_grid_1.jpg"}
            link={"See Terms & Conditions"}
          />
          <HomepageCard
            title={"Watch Rings Of Power"}
            img={"../assets/home_grid_2.jpg"}
            link={"See Terms & Conditions"}
          />
          <HomepageCard
            title={"Unlimited Streaming"}
            img={"../assets/home_grid_3.jpg"}
            link={"See Terms & Conditions"}
          />
          <HomepageCard
            title={"More titles to Explore"}
            img={"../assets/home_grid_4.jpg"}
            link={"See Terms & Conditions"}
          />
          <HomepageCard
            title={"Shop Pet Supplies"}
            img={"../assets/home_grid_5.jpg"}
            link={"See Terms & Conditions"}
          />
          <HomepageCard
            title={"Get Instant Groceries"}
            img={"../assets/home_grid_6.jpg"}
            link={"See Terms & Conditions"}
          />
          <HomepageCard
            title={"Buy Electronics & Gadgets"}
            img={"../assets/home_grid_7.jpg"}
            link={"See Terms & Conditions"}
          />
          <HomepageCard
            title={"Get 3 Months Free..."}
            img={"../assets/home_grid_1.jpg"}
            link={"See Terms & Conditions"}
          />
          <div className="flex justify-center items-center">
            <img src={".. /assets/banner_image_2.jpg"} alt="" className="xl:hidden  object-cover " />
          </div>
        </div>
        <ProductsSlider />
        <Category />
        <div className="h-[300px]"> 
          <img src="../assets/banner_image.jpg" alt="" className="h-[100%] m-auto"/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
