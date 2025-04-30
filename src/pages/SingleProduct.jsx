import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../../axiosConfig";

function SingleProduct() {
  const { id } = useParams();
  const [sindleData, setSingleData] = useState({});
  useEffect(() => {
    getSingleProductData(id);
  }, [id]);

  async function getSingleProductData(id) {
    const result = await instance.get(`/products/${id}`);
    setSingleData(result.data.product);
    console.log(result.data.product);
  }

  function trimContent(str) {
    return str.split(" ").slice(0, 10).join(" ") + "...";
  }

  return (
    <>
      <div className="single-product-container min-h-screen p-8 bg-gray-200 flex justify-center items-center">
        <div className="single-product w-[80%] h-[80%] bg-white rounded-xl flex flex-col md:flex-row">
          <div className="left w-full md:w-1/2 h-full p-2 flex flex-col justify-between items-center ">
            <img src={sindleData.image} alt="" className="h-[70%] w-[98%] " />
            <div className="buttons flex gap-6 text-white font-semibold">
              <button className=" py-1.5 px-2 rounded-lg bg-green-400 hover:bg-rose-500 cursor-pointer ">
                Add To Cart
              </button>
              <button className=" py-1.5 px-2 rounded-lg bg-blue-400 hover:bg-rose-500 cursor-pointer ">
                Add To WishList
              </button>
            </div>
          </div>

          <div className="right w-full md:w-1/2 h-full  p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{sindleData.title}</h2>
              <p className="mb-1">
                <span className="font-semibold">Brand:</span> {sindleData.brand}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Model:</span> {sindleData.model}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Color:</span> {sindleData.color}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Category:</span>{" "}
                {sindleData.category}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Price:</span> ₹
                {sindleData.price} &nbsp;
                <span className="text-green-600 font-semibold">
                  ({sindleData.discount}% OFF)
                </span>
              </p>
              <p className="mt-2 text-gray-700 whitespace-pre-line">
                {sindleData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
