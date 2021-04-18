import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = "https://warm-spire-93290.herokuapp.com/review";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <main style={{ height: "100%" }} className="pt-5 pb-5 bg-color">
      <h5 className="font-style sub-heading text-center">From Reviews</h5>
      <h2 className="font-style heading-text text-center">
        Our Customers Feedback
      </h2>
      <div>
        {reviews.map((review) => {
          return (
            <div className="d-inline-flex col-12 mt-auto font-style col-md-4 p-4">
              <div class="p-3 shadow">
                <div className="d-flex justify-content-center align-items-center ">
                  <img
                    style={{ width: "70px" }}
                    className="rounded-circle"
                    src={review.imgSrc}
                    alt=""
                  />
                  <p className="ml-3 mt-2">{review.title} </p>
                </div>
                <div class="card-body text-center ">
                  <p className="text-smaller">{review.company} </p>
                  <p className="text-smaller">{review.comments} </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Reviews;
