import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../../App";
import Payment from "../Payment/Payment";
import SidBar from "../SidBar/SidBar";
import "./Book.css";

const Book = () => {
  const { _id } = useParams();
  const [booking, setBooking] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    const url = `http://localhost:5000/book/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [_id]);
  const { title, price, description, imageURL } = booking;

  const history = useHistory();
  const handlePayment = () => {
    const link = "/bookList";
    history.push(link);
    const serviceInfo = {
      title,
      price,
      imageURL,
      description,
      ...loggedInUser,
      orderTime: new Date(),
    };
    const uri = `http://localhost:5000/addBooking`;
    fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceInfo),
    }).then((res) => console.log("hello", res));
  };
  return (
    <div className="row">
      <div className="col-md-2">
        <SidBar></SidBar>
      </div>
      <div className="col-md-10 main-book p-5">
        <h5 className="font-style p-3 bg-light w-25">{title}</h5>
        <p className="font-style pt-2">Your service charge will be ${price}</p>

        <Payment handlePayment={handlePayment}></Payment>
      </div>
    </div>
  );
};

export default Book;
