import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

const SingleClass = ({ singleClass }) => {
  const { _id, image, language_name, instructor, total_seat, enrolled, price } =
    singleClass;
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = (singleClass) => {
    console.log(singleClass);
    if (user && user?.email) {
      const cartClass = {
        classId: _id,
        image,
        language_name,
        instructor,
        available_seat,
        price,
        email: user?.email,
      };
      fetch(`http://localhost:7000/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${singleClass?.language_name} class has been selected`,
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/mycart");
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to selected!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please, Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <>
      <div className="card w-96 glass">
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
            <button
              onClick={() => handleSelect(singleClass)}
              className="btn btn-primary btn-sm"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleClass;
