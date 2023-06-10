import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newClass = {
      language_name: data.language_name,
      image: data.image,
      instructor: data.instructor,
      email: data.email,
      total_seat: parseInt(data.total_seat),
      enrolled: parseInt(data.enrolled),
      price: parseInt(data.price),
    };
    console.log("clicked", data, newClass);
    fetch(`http://localhost:7000/addClass`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          Swal.fire("Added!", "Your class has been added.", "success");
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
          <input
            className="m-2 p-2 h-10 w-60 rounded"
            placeholder="Language Image"
            {...register("image", { required: true })}
          />

          <br />
          <input
            className="m-2 p-2 h-10 w-60 rounded"
            defaultValue={25}
            {...register("total_seat", { required: true })}
          />
          <input
            className="m-2 p-2 h-10 w-60 rounded"
            placeholder="enrolled"
            {...register("enrolled", { required: true })}
          />
          <br />

          <input
            className="m-2 p-2 h-10 w-60 rounded"
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
