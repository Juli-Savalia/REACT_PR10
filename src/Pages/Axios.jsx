import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Axios = () => {
  const [card, setCard] = useState([]);
  const getCard = async () => {
    await axios.get("https://fakestoreapi.com/products").then((response) => {
      setCard(response.data);
      console.log(response.data);
    });
  };
  useEffect(() => {
    getCard();
  }, []);

  return (
    <div className="container py-5">
      <button className="border-0 px-3 py-2 bg-danger rounded-pill">
        <Link className="text-decoration-none text-white" to={"/Fetch"}>
          Fetch
        </Link>
      </button>
      <h3 className="text-center py-5 fw-bold">Axios Method to fetch Data</h3>
      <div className="d-flex flex-wrap justify-content-between">
        {card &&
          card.map((item) => {
            return (
              <div className="p-3 col-3 ">
                <div className="card my-3 p-3" style={{ height: "388px" }}>
                  <img
                    src={item.image}
                    className="card-img-top w-50 mx-auto"
                    alt="..."
                    style={{ height: "100px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center py-3">
                      {item.category}
                    </h5>
                    <p>{item.title}</p>
                    <p className="card-text text-secondary">{item.price}/-</p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Axios;
