import React from "react";
import { Zoom } from "react-awesome-reveal";
import useAllInstructor from "../../hooks/useAllInstructor";
import AllInstructorCard from "./AllInstructorCard";
import { Helmet } from "react-helmet";

const OurAllInstructors = () => {
  const [allInstructors] = useAllInstructor();

  return (
    <div className="py-20">
      <Helmet>
        <title>Instructors | LanguageGuide</title>
      </Helmet>
      <Zoom>
        <h3 className="text-3xl text-center text-orange-400 font-bold my-20">
          Our All Instructors are Here
        </h3>
      </Zoom>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
