import Job from "./Job";

const JobList = ({ jobs }) => {
  //   console.log(jobs);
  return (
    <div className=" rounded-lg mb-2 bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-[90%] md:w-[65%] mx-auto">
        <h3 className="font-semibold mb-2 text-xl pt-8 text-blue-500">
          Recommended Jobs
        </h3>
        {jobs
          .filter((job) => job.applied === false)
          .map((job) => (
            <Job key={job.id} job={job} />
          ))}
      </div>
      {jobs.length > 0 ? (
        <button className="text-blue-700 py-2 bg-gray-50 w-[65%] mx-auto">
          See more jobs...
        </button>
      ) : (
        <span className="text-blue-700 py-2">No Jobs Found!</span>
      )}
    </div>
  );
};

export default JobList;
