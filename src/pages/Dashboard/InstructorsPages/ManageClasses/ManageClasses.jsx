import React from "react";
import UseClasses from "../../../../hooks/UseClasses";
import { Helmet } from "react-helmet";

const ManageClasses = () => {
  const [classes, ,] = UseClasses();

  return (
    <div className="w-full">
      <Helmet>
        <title>Manage Classes | LanguageGuide</title>
      </Helmet>
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
                  <button className="btn btn-outline btn-xs">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
