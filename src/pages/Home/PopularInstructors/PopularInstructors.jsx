import React from "react";
import usePopularInstructor from "../../../hooks/usePopularInstructor";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {
  const [instructors] = usePopularInstructor();
  return (
    <div>
      <h3 className="text-3xl text-center font-bold my-20">
        Here's Our Popular {instructors?.length} Teachers
      </h3>
      <div className="grid grid-cols-3 gap-12">
        {instructors?.map((singleInstructor) => (
          <PopularInstructorsCard
            key={singleInstructor._id}
            singleInstructor={singleInstructor}
          ></PopularInstructorsCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
