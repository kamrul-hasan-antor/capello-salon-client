import React, { useContext } from "react";
import SidBar from "../SidBar/SidBar";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
const AddReview = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const reviewData = {
      title: data.title,
      comments: data.comments,
      company: data.company,
      ...loggedInUser,
    };
    const url = "https://warm-spire-93290.herokuapp.com/addReview";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reviewData),
    }).then((res) => console.log(res));
  };
  return (
    <div className="row bg-color">
      <div className="col-md-2">
        <SidBar></SidBar>
      </div>
      <div className="col-md-10 font-style pt-3">
        <h4>Review</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row w-75 ml-2">
            <div className="col-md-7">
              <input
                className="form-control mt-3"
                name="title"
                placeholder="Your Name"
                {...register("title", { required: true })}
              />
            </div>
            <div className="col-md-5">
              <input
                className="form-control mt-3"
                name="company"
                placeholder="Designation, Company Name"
                {...register("company", { required: true })}
              />
            </div>
            <div className="col-md-7">
              <textarea
                className="form-control mt-3"
                name="Comments"
                placeholder="Comments"
                rows="6"
                id="comment"
                {...register("comments", { required: true })}
              ></textarea>
            </div>
            <div className="col-md-4 mt-3 "></div>
            <input className="button submitBtn" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
