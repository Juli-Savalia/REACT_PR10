import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Fetch = () => {
  const [product, setProduct] = useState([]);
  let fetchrecord = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setProduct(data.products);
      });
  };
  // console.log(fetchrecord);
  useEffect(() => {
    fetchrecord();
  }, []);
  return (
    <div className="py-5">
      <div className="container">
        <button className="border-0 px-3 py-2 bg-danger rounded-pill">
          <Link className="text-decoration-none text-white" to={"/"}>
            Axios
          </Link>
        </button>
        <h3 className="text-center py-5 fw-bold">Fetch Method to fetch Data</h3>
        <div className="d-flex flex-wrap">
          {product &&
            product.map((p) => {
              return (
                <div className="col-3">
                  <img src={p.images} alt="" className="w-100" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Fetch;
