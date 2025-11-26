import React, { useEffect, useState } from "react";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  //   console.log(services);

  return (
    <div className="mt-8 px-4 md:px-[80px] lg:px-[140px]">
      <div>
        <h3 className="font-bold text-2xl md:text-3xl text-center">
          Popular Winter Care Services
        </h3>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">
        {services.slice(0, 6).map((service) => (
          <div className="card bg-base-100 w-full shadow-sm">
            <figure>
              <img
                className="w-full h-[260px] md:h-[300px] object-cover"
                src={service?.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service?.serviceName}</h2>
              <div className="flex items-center justify-between text-sm md:text-base">
                <p className="text-gray-600 font-semibold">
                  💲 Price:{" "}
                  <span className="font-semibold text-gray-900">
                    {service?.price}
                  </span>
                </p>
                <p className="text-gray-600 font-semibold">
                  ⭐ Ratings: {service?.rating}
                </p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary text-sm md:text-base">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
