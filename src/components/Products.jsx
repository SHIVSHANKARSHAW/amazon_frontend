import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { callApi } from "../utils/CallApi";
import { GB_CURRENCY } from "../utils/Constants";
import ProductDetails from "./ProductDetails";
import { addToCart } from "../redux/cartSlice"; // Update import
import { useDispatch } from "react-redux";

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();

  const getProduct = () => {
    callApi(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  const addQuantityToProduct = () => {
    setProduct((product.quantity = quantity));
    return product;
  };


  useEffect(() => {
    getProduct();
  },);

  if (!product?.title) return <h1>Loading Product .....</h1>;

  return (
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
        <div className="grid grid-cols-10 gap-3">
          {/* Left */}
          <div className="col-span-3 bg-white p-10 m-auto rounded ">
            <img src={`${product.image}`} />
          </div>
          {/* Middle */}
          <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
            <div>
              <ProductDetails product={product} ratings={true} />
            </div>
            <div className="text-lg mt-4 p-3 rounded">
              {product.description}
            </div>
          </div>
          {/* Right */}
          <div className="col-span-2 p-4 rounded bg-white">
            <div className="text-3xl font-semibold text-right">
              {GB_CURRENCY.format(product.price)}
            </div>
            <div className="text-xl font-semibold text-gray-700 text-right">
              <s>{GB_CURRENCY.format(product.oldPrice)}</s>
            </div>
            <div className="text-base font-semibold text-blue-500 mt-3">
              Free Returns
            </div>
            <div className="text-base font-semibold text-blue-500 mt-1 ">
              Free Delivery
            </div>
            <div className="text-lg font-semibold text-green-700 mt-1">
              In Stock
            </div>
            <div className="text-lg">
              Quantity:
              <select
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="p-2 bg-white rounded-md focus:border-indigo-600 outline-none"
                value={quantity}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <Link to="/checkout">
              <button
                onClick={() => {
                  const payload = addQuantityToProduct();
                  console.log("Payload:", payload);
                  dispatch(addToCart(payload));
                }}
                className="bg-yellow-400 w-full p-3 text-sm mt-4 rounded hover:bg-yellow-600"
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;