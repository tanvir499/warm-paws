import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="px-[145px]">
      <div className="grid grid-cols-3 mt-12 gap-5">
        {services.map((service) => (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{
              scale: 1,
              transition: { duration: 1 },
            }}
            className="card bg-base-100 w-96 shadow-sm"
          >
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
                <Link to={`/details/${service?.serviceId}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
