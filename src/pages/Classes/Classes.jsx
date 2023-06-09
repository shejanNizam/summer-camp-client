import React from "react";
import { Helmet } from "react-helmet";
import UseClasses from "../../hooks/UseClasses";
import SingleClass from "./SingleClass";

const Classes = () => {
  const [classes] = UseClasses();
  return (
    <div className="py-32">
      <Helmet>
        <title>Classes | LanguageGuide</title>
      </Helmet>
      <h3 className="text-center text-4xl my-8">Total: {classes?.length} </h3>
      <div className="grid grid-cols-3 gap-12">
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
