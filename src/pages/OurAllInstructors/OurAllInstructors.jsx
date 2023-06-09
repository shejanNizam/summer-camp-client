import React from "react";
import useInstructor from "../../hooks/useInstructor";
import AllInstructorCard from "./AllInstructorCard";

const OurAllInstructors = () => {
  const [allInstructors] = useInstructor();

  return (
    <div className="py-20">
      <h3 className="text-3xl text-center font-bold my-20">
        OurAllInstructors are Here
      </h3>
      <div className="grid grid-cols-3 gap-12">
        {allInstructors?.map((singleInstructor) => (
          <AllInstructorCard
            key={singleInstructor._id}
            singleInstructor={singleInstructor}
          ></AllInstructorCard>
        ))}
      </div>
    </div>
  );
};

export default OurAllInstructors;
