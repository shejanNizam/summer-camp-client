import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            language_name,
            instructor,
            email,
            total_seat,
            enrolled,
            price,
          } = data;
          const newItem = {
            language_name,
            image: imgURL,
            instructor,
            email,
            total_seat: parseFloat(total_seat),
            enrolled: parseFloat(enrolled),
            price: parseFloat(price),
          };
          console.log(newItem);
          axiosSecure.post("/addClass", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/dashboard/manageClasses");
            }
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Add A Class | LanguageGuide</title>
      </Helmet>
      <div className="m-8 p-20 bg-gray-400 text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="m-2 p-2 h-10 w-60 rounded"
            readOnly
            defaultValue={user?.displayName}
            {...register("instructor", { required: true })}
          />
          <input
            className="m-2 p-2 h-10 w-60 rounded"
            readOnly
            defaultValue={user?.email}
            {...register("email", { required: true })}
          />
          <br />
          <input
            className="m-2 p-2 h-10 w-60 rounded"
            placeholder="Language Name"
            {...register("language_name", { required: true })}
          />
          {/* <input
            className="m-2 p-2 h-10 w-60 rounded"
            placeholder="Language Image"
            {...register("image", { required: true })}
          /> */}
          <input
            type="file"
            className="file-input file-input-bordered file-input-xs max-w-xs m-2 p-2 h-10 w-60 rounded"
            placeholder="Language Image"
            {...register("image", { required: true })}
          />

          <br />
          <input
            className="m-2 p-2 h-10 w-60 rounded"
            type="number"
            defaultValue={25}
            {...register("total_seat", { required: true })}
          />
          <input
            className="m-2 p-2 h-10 w-60 rounded"
            type="number"
            placeholder="enrolled"
            {...register("enrolled", { required: true })}
          />
          <br />

          <input
            className="m-2 p-2 h-10 w-60 rounded"
            type="number"
            placeholder="Price"
            {...register("price", { required: true })}
          />
          <br />

          <input
            className="btn btn-outline btn-sm"
            type="submit"
            value="Add Class"
          />
        </form>
      </div>
    </>
  );
};

export default AddClass;
