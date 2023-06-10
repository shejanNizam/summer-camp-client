import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import usePopularInstructor from "../../../hooks/usePopularInstructor";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {
  const [instructors] = usePopularInstructor();
  return (
    <div>
      <Zoom>
        <h3 className="text-3xl text-center font-bold my-20">
          Here's Our Popular {instructors?.length} Teachers
        </h3>
      </Zoom>
      <div className=" w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
