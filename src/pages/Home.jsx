import React, { useEffect, useState } from "react";
import instance from "../../axiosConfig";
import Product from "../components/Product";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    setIsLoading(true);
    const response = await instance.get("/products");
    const result = response.data.products;
    setData(result);
    setIsLoading(false);
    console.log(result[0]);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <div className="loader-container">
          <div className="loader"></div>
          </div>
        </>
      ) : (
        <>
          <div className="products-container p-12 min-h-screen bg-gray-100 flex gap-6 justify-center items-center flex-wrap shadow-xl">
            {data.map((obj) => {
              return <Product object={obj} key={obj.id} />;
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Home;
