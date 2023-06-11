import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const PopularInstructorsCard = ({ singleInstructor }) => {
  const {
    image,
    instructor_name,
    email,
    taken_class,
    num_of_classes,
    num_of_students,
  } = singleInstructor;
  return (
    <Fade cascade>
      <div className="card rounded w-72 mx-auto glass">
        <figure>
          <Zoom>
            <div className="avatar mt-4">
              <div className="w-40 rounded-full ring ring-ghost ring-offset-base-100 ring-offset-2">
                <img src={image} />
              </div>
            </div>
          </Zoom>
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {instructor_name} </h2>
          <p> Email: {email} </p>
          <p> Language: {taken_class} </p>
          <p> Num of classes: {num_of_classes} </p>
          <p> Total Students: {num_of_students} </p>
        </div>
      </div>
    </Fade>
  );
};

export default PopularInstructorsCard;
