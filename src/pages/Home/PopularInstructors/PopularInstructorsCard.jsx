import React from "react";

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
    <div>
      <div className="card w-96 glass">
        <figure>
          <img className=" w-80 h-48" src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {instructor_name} </h2>
          <p> Email: {email} </p>
          <p> Taught Language: {taken_class} </p>
          <p> Num of classes: {num_of_classes} </p>
          <p> Total Students: {num_of_students} </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorsCard;
