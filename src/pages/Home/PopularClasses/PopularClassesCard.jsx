import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const PopularClassesCard = ({ singleClass }) => {
  const { _id, image, language_name, instructor, total_seat, enrolled, price } =
    singleClass;
  return (
    <Fade cascade>
      <div className="card w-96 mx-auto glass">
        <figure>
          <Zoom>
            <img className=" w-80 h-52 rounded-md m-4" src={image} alt="#" />
          </Zoom>
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {language_name} </h2>
          <p> Instructor: {instructor} </p>
          <p> Total Seat: {total_seat} </p>
          <p> Enrolled: {enrolled} </p>
          <p> Price: ${price} </p>
        </div>
      </div>
    </Fade>
  );
};

export default PopularClassesCard;
