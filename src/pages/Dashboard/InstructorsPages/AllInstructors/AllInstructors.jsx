import React from "react";
import useAuth from "../../../../hooks/useAuth";
import useInstructors from "../../../../hooks/useInstructors";
import { Helmet } from "react-helmet";

const AllInstructors = () => {
  const [instructors] = useInstructors();
  const { user } = useAuth();

  return (
    <div>
      <Helmet>
        <title>All Instructors | LanguageGuide</title>
      </Helmet>
      <h3 className="text-3xl text-center font-bold my-4">
        Our Available {instructors?.length} Instructors are Here
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th> Image </th>
              <th> Name </th>
              <th> Email </th>
              <th> Role </th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user?.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllInstructors;
