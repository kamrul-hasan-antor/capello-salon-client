import React from "react";
import { useHistory } from "react-router";

const AllServices = (props) => {
  const { _id, name, price, description, imageURL } = props.data;

  const history = useHistory();
  const handleBooking = (id) => {
    const url = `book/${id}`;
    history.push(url);
  };

  return (
    <div className="d-inline-flex col-12 mt-auto col-lg-4 p-4">
      <div class="card align-items-center p-3 shadow">
        <img src={imageURL} class="card-img-top w-25 p-2" alt="..." />
        <div class="card-body text-center font-style ">
          <h5 class="card-title heading">{name} </h5>
          <h6 class="card-title heading">${price} </h6>
          <p className="text-smaller">{description} </p>
          <button onClick={() => handleBooking(_id)} class="button ">
            book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
