import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";
import "./AddServices.css";
const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const serviceData = {
      title: data.title,
      imageURL: imageURL,
      price: data.price,
      description: data.description,
    };
    const url = "http://localhost:5000/addServices";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(serviceData),
    }).then((res) => console.log(res));
  };
  const handleImageUpload = (e) => {
    const imgData = new FormData();
    imgData.set("key", "d6e632f3c56512e7e488a9c05a90ab9a");
    imgData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .then(function (error) {
        console.log(error);
      });
  };

  return (
    <section className=" row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 w-100">
        <h2 className="font-style heading-text mt-3">Add Service</h2>
        <div className="mainForm ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row w-75 ml-2">
              <div className="col-md-7">
                <input
                  className="form-control mt-3"
                  name="title"
                  placeholder="Title"
                  {...register("title", { required: true })}
                />
              </div>
              <div className="col-md-5">
                <input
                  className="form-control mt-3"
                  name="price"
                  placeholder="Price"
                  {...register("price", { required: true })}
                />
              </div>
              <div className="col-md-7">
                <textarea
                  className="form-control mt-3"
                  name="description"
                  placeholder="Description"
                  rows="6"
                  id="comment"
                  {...register("description", { required: true })}
                ></textarea>
              </div>
              <div className="col-md-4 mt-3 ">
                <input onChange={handleImageUpload} type="file" name="image" />
              </div>
              <input className="button submitBtn" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddServices;
