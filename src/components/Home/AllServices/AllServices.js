import React from "react";

const AllServices = ({ data }) => {
  return (
    <div className="d-inline-flex col-12 mt-auto col-lg-4 p-4">
      <div class="card align-items-center p-3 shadow">
        <img src={data?.imageURL} class="card-img-top w-25 p-2" alt="..." />
        <div class="card-body text-center font-style ">
          <h5 class="card-title heading">{data?.name} </h5>
          <h6 class="card-title heading">${data?.price} </h6>
          <p className="text-smaller">{data?.description} </p>
          <button class="button ">buy now</button>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
