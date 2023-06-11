import React from "react";
import { Zoom } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import usePopularClasses from "../../../hooks/usePopularClasses";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const [classes] = usePopularClasses();

  return (
    <div>
      <Zoom>
        <h3 className="text-3xl text-center text-orange-400 font-bold my-20">
          Here's Our Top {classes?.length} Popular Classes
        </h3>
      </Zoom>

      <div className=" w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {classes?.map((singleClass) => (
          <PopularClassesCard
            key={singleClass._id}
            singleClass={singleClass}
          ></PopularClassesCard>
        ))}
      </div>
      <div className=" text-end my-8">
        <Link to="/classes">
          <button className="btn btn-outline btn-sm">
            See All <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularClasses;
