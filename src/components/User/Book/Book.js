import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";

const Book = () => {
  const { _id } = useParams();
  const [booking, setBooking] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(UserContext);

  useEffect(() => {
    const url = `http://localhost:5000/book/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [_id]);
  console.log(booking);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Book;
