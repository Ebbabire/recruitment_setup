import React from "react";
import { featuredCompanies } from "./data/data";

const FeaturedCompanies = () => {
  return (
    <div className="rounded-lg py-5 pb-12 mb-12 px-10">
      <h3 className="text-xl font-bold mb-4 text-center">
        Find remote software jobs with hundreds of Recruitify clients
      </h3>
      <div className="flex flex-wrap items-center">
        {featuredCompanies.map((company) => (
          <div key={company.id} className="m-4">
            <img
              src={company.logo}
              alt={company.name}
              className="w-12 h-12 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCompanies;
