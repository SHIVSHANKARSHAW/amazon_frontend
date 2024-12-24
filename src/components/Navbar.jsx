import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import Search from "./Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.productNumber) 
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px] justify-between">
        <div className="flex items-center ml-2">
          <Link to={"/"}>
            <img
              src="../assets/amazon.png"
              alt=""
              className="h-[35px] w-[120px] m-2"
            />
          </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver To </div>
            <div className="text-sm xl:text-base font-bold">India</div>
          </div>
        </div>
        <div className="flex items-center">
          <Search className="flex grow relative items-center" />
        </div>
        <div className="flex items-center">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <Link to={"/checkout"}>
          <div className="flex pr-3 pl-3">
            <ShoppingCartIcon className="h-[45px]" />
            <div className="relative">
              <div className="absolute right-[8px] font-bold m-2 text-orange-400">
                {cart}
              </div>

            </div>
            <div className="mt-6 text-sm xl:sm font-bold">Cart</div>
          </div></Link>
        </div>
      </div>
      <div className="bg-amazonclone-light_blue flex font-bold text-white space-x-3 text-sm p-2">
        <div>Today's Deals </div>
        <div>Customer Service </div>
        <div>Registry </div>
        <div>Gift Cards </div>
        <div>Sell </div>
        <div>Amazon Fresh </div>
        <div>Best Sellers </div>
        <div>Prime </div>
        <div>Electronics </div>
      </div>
    </header>
  );
};

export default Navbar;
