import React from "react";
import { Zoom } from "react-awesome-reveal";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import useVarifyInstructor from "../../hooks/useVarifyInstructor";

const SingleClass = ({ singleClass }) => {
  const { _id, image, language_name, instructor, total_seat, enrolled, price } =
    singleClass;

  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const available = total_seat - enrolled;

  const [isAdmin] = useAdmin();
  const [isInstructor] = useVarifyInstructor();
  // const isAdmin = true;
  // const isInstructor = true;

  const handleSelect = (singleClass) => {
    console.log(singleClass);
    if (user && user?.email) {
      const cartClass = {
        classId: _id,
        image,
        language_name,
        instructor,
        total_seat,
        enrolled,
        price,
        email: user?.email,
      };
      axiosSecure.post(`/carts`, cartClass).then((data) => {
        if (data?.data?.insertedId) {
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
          <Zoom>
            <img className=" w-80 h-48" src={image} alt="#" />
          </Zoom>
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {language_name} </h2>
          <p> Instructor: {instructor} </p>
          <p> Total Seat: {total_seat} </p>
          <p> Enrolled: {enrolled} </p>
          <p> Available Seat: {available} </p>
          <p> Price: ${price} </p>
          <div className="card-actions justify-end">
            <Zoom>
              <button
                onClick={() => handleSelect(singleClass)}
                className={`btn btn-outline btn-sm ${
                  isAdmin && isInstructor ? "disabled" : ""
                }`}
                disabled={isAdmin && isInstructor}
              >
                Select
              </button>
            </Zoom>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleClass;
