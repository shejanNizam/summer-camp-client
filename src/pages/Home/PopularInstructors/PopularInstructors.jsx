import React from "react";
import { Zoom } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import usePopularInstructor from "../../../hooks/usePopularInstructor";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {
  const [instructors] = usePopularInstructor();
  return (
    <div>
      <Zoom>
        <h3 className="text-3xl text-center text-orange-400 font-bold mt-16 mb-8">
          Here's Our {instructors?.length} Popular Instructors
        </h3>
      </Zoom>
      <div className=" w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {instructors?.map((singleInstructor) => (
          <PopularInstructorsCard
            key={singleInstructor._id}
            singleInstructor={singleInstructor}
          ></PopularInstructorsCard>
        ))}
      </div>
      <div className=" text-right me-40 my-4">
        <Link to="/ourAllInstructors">
          <button className="btn btn-outline btn-sm">
            See All <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularInstructors;
