import React from "react";
import { Link } from "react-router-dom";

const PopularClassesCard = ({ singleClass }) => {
  const { _id, image, language_name, instructor, total_seat, enrolled, price } =
    singleClass;
  return (
    <div>
      <div className="card w-96 mx-auto glass">
        <figure>
          <img className=" w-80 h-48" src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {language_name} </h2>
          <p> Instructor: {instructor} </p>
          <p> Total Seat: {total_seat} </p>
          <p> Enrolled: {enrolled} </p>
          <p> Price: ${price} </p>
          <div className="card-actions justify-end">
            <Link to="/classes">
              <button className="btn btn-primary btn-sm">Select</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClassesCard;
