import { useState } from "react";
import AppliedJobs from "./components/AppliedJobs";
import JobList from "./components/JobList";
import Navbar from "./components/Navbar";
import { jobs } from "./components/data/data";
import Footer from "./components/Footer";
import FeaturedCompanies from "./components/FeaturedCompanies";

function App() {
  const [recommededjob, setRecommededJob] = useState(jobs);

  const handleChange = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "") {
      setRecommededJob(jobs);
    } else {
      const filteredJobs = recommededjob.filter((job) =>
        job.title.toLowerCase().includes(e.target.value)
      );
      setRecommededJob(filteredJobs);
    }
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className=" py-20 bg-gray-300">
        <h2 className="text-3xl font-bold mb-4 mx-auto w-[70%]">
          Welcome to Recruitify
        </h2>
        <p className="text-gray-700 mx-auto w-[70%]">
          Find the perfect candidates for your company. We specialize in hiring
          software engineers, product managers, data scientists, and more. Our
          platform connects companies in India and worldwide with top talent.
        </p>
      </div>
      <div className="text-xl font-bold py-4 flex px-2 lg:px-10 items-center mb-2 justify-between bg-gray-100 shadow-md">
        <div className="mx-auto md:w-[65%] flex justify-between items-center">
          <h3 className="text-xl">Find Jobs</h3>
          <div className="flex items-center">
            <input
              type="text"
              className="px-4 py-1 bg-slate-200 rounded-lg placeholder:font-light placeholder:text-black/40 placeholder:text-sm font-light focus:outline-none"
              placeholder="jobs"
              onChange={handleChange}
            />
            <label htmlFor="text" className="text-sm ml-2">
              <button className="bg-slate-300 px-2 py-1 rounded-sm">
                Search for jobs
              </button>
            </label>
          </div>
        </div>
      </div>
      <JobList jobs={recommededjob} />
      <AppliedJobs jobs={jobs} />
      <FeaturedCompanies />
      <Footer />
    </div>
  );
}

export default App;
