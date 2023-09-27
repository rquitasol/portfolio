import React from "react";
import temp from "../assets/temp.jpg";

const Work = () => {
  const workCard = (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={temp} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );

  const workCardMap = [workCard, workCard, workCard, workCard];

  return (
    <div className="section">
      <div className="hero min-h-screen bg-primary text-secondary">
        <div className="hero-content max-w-full">
          <div>
            <h1 className="text-5xl font-bold ">Work Experience!</h1>
            <div className="flex flex-wrap gap-4">{workCardMap}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
