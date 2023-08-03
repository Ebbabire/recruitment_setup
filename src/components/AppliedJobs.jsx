import React from "react";
import Job from "./Job";

const AppliedJobs = ({ jobs }) => {
  return (
    <div className=" rounded-lg pb-5 bg-gray-100 flex flex-col justify-center items-center">
      <div className="mx-auto w-[65%]">
        <h3 className="font-semibold mb-2 text-xl pt-8 text-blue-500">
          Recently Applied
        </h3>
        {jobs
          .filter((job) => job.applied === true)
          .map((job) => (
            <Job key={job.id} job={job} />
          ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
