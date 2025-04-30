import React from "react";
import { Link } from "react-router-dom";

function Product({ object }) {
  function trimContent(str) {
    return str.split(" ").slice(0, 10).join(" ") + "...";
  }
  return (
    <>
      <Link to={`/product/${object.id}`}>
        <div className="product bg-white w-xs h-72 rounded-lg p-4 flex flex-col justify-between ">
          <div className="top w-full h-1/2 flex">
            <img
              src={object.image}
              alt={object.title}
              className="h-full w-1/2"
            />
            <div className="price-color flex flex-col gap-2 justify-center items-center w-1/2 text-xl font-semibold">
              <p className="rounded-md p-1 bg-green-200">
                Price : $ {object.price}
              </p>
              <p className="rounded-md p-1 bg-amber-100">
                Color : {object.color}
              </p>
            </div>
          </div>
          <div className="details">
            <p>{trimContent(object.title)}</p>
          </div>
          <div className="buttons flex gap-6 text-white font-semibold">
            <button className="border-1 py-1.5 px-2 rounded-lg bg-green-400 hover:bg-rose-500 cursor-pointer ">
              Add To Cart
            </button>
            <button className="border-1 py-1.5 px-2 rounded-lg bg-blue-400 hover:bg-rose-500 cursor-pointer ">
              Add To WishList
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Product;
