import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import SidBar from "../SidBar/SidBar";

const BookList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookings, setBookings] = useState([]);
  const filterBooking = (data) => {
    const filterData = data.filter(
      (booking) => booking.email == loggedInUser.email
    );
    setBookings(filterData);
  };

  useEffect(() => {
    const url = "https://warm-spire-93290.herokuapp.com/booking";
    fetch(url)
      .then((res) => res.json())
      .then((data) => filterBooking(data));
  }, []);

  return (
    <div className="row bg-color">
      <div className="col-md-2">
        <SidBar></SidBar>
      </div>
      <div className="col-md-10 row mt-3 justify-content-center">
        {bookings.map((singleBooking) => {
          return (
            <div
              style={{ height: "250px" }}
              className="col-md-5 bg-light m-1 font-style"
            >
              <img
                className="pt-3"
                style={{ width: "50px" }}
                src={singleBooking.imageURL}
                alt=""
              />
              <h5 className="mt-3">{singleBooking.title} </h5>
              <p className="text-small">{singleBooking.description} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookList;
