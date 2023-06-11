import React from "react";
import UseClasses from "../../../../hooks/UseClasses";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageClasses = () => {
  const [classes, , refetch] = UseClasses();
  const [axiosSecure] = useAxiosSecure();

  // const handleDelete = (item) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axiosSecure.delete(`/classes/${item._id}`).then((res) => {
  //         if (res.data.deletedCount > 0) {
  //           refetch();
  //           Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //         }
  //       });
  //     }
  //   });
  // };
  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Lan Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Total</th>
              <th>Enrolled</th>
              <th>Update</th>
              {/* <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {classes?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.language_name}</td>
                <td>{item.instructor}</td>
                <td>{item?.email ? item?.email : <p>Initial Data</p>}</td>
                <td>{item.total_seat}</td>
                <td>{item.enrolled}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
                {/* <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
