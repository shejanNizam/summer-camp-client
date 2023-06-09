import React from "react";
import usePopularClasses from "../../../hooks/usePopularClasses";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const [classes] = usePopularClasses();

  return (
    <div>
      <h3 className="text-3xl text-center font-bold my-20">
        Here's Our Top {classes?.length} Popular Classes
      </h3>
      <div className="grid grid-cols-3 gap-12">
        {classes?.map((singleClass) => (
          <PopularClassesCard
            key={singleClass._id}
            singleClass={singleClass}
          ></PopularClassesCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
