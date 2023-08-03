const Job = ({ job }) => {
  return (
    <div className="mb-2 w-full shadow-md px-4 py-2 bg-gray-100 rounded-md">
      <h4 className="text-lg font-medium">{job.title}</h4>
      <p className="text-sm text-gray-500 font-medium">{job.company}</p>
      <p className="text-md text-gray-600 mb-4 font-medium">{job.city}</p>
      {!job.applied && <p className="text-gray-700 mb-2">{job.description}</p>}
      {job.skills && (
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className=" text-gray-700 bg-slate-200 px-2 rounded-sm font-semibold text-sm "
            >
              {skill}
            </span>
          ))}
        </div>
      )}
      {!job.applied && <p>{job.salary}</p>}
      {!job.applied && (
        <p>
          <span className="font-semibold">Posted:</span> {job.posted}
        </p>
      )}
      {job.pending && (
        <p className="font-bold">
          Pending: <span className="text-gray-500">YESTERDAY</span>
        </p>
      )}
      {!job.pending && job.applied === true && (
        <p className="font-semibold">Not Accepted</p>
      )}
      <div className="flex justify-end">
        {!job.applied && (
          <button className="bg-blue-700 px-3 py-2 rounded-md text-white">
            Apply Now
          </button>
        )}
      </div>
    </div>
  );
};

export default Job;
