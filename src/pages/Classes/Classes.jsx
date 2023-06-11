import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import UseClasses from "../../hooks/UseClasses";
import SingleClass from "./SingleClass";

const Classes = () => {
  const [classes] = UseClasses();
  return (
    <div className="py-28">
      <Helmet>
        <title>Classes | LanguageGuide</title>
      </Helmet>
      <Zoom>
        <h3 className="text-center text-4xl text-orange-400 font-bold my-8">
          Here's our {classes?.length} Taught Languages
        </h3>
      </Zoom>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {classes?.map((singleClass) => (
          <SingleClass
            key={singleClass._id}
            singleClass={singleClass}
          ></SingleClass>
        ))}
      </div>
    </div>
  );
};

export default Classes;
