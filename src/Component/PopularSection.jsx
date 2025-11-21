import React, { useEffect, useState } from "react";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(services);

  return (
    <div className="mt-8 px-[140px]">
      <div>
        <h3 className="font-bold text-3xl text-center">
          Popular Winter Care Services
        </h3>
      </div>

      <div className="grid grid-cols-3 mt-12 gap-5">
        {services.map((service) => (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
              className="w-full h-[300px] object-cover"
                src={service?.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service?.serviceName}</h2>
             <div>
                <p>Price: {service?.price}</p>
                <p>Ratings: {service?.ratings}</p>
             </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
