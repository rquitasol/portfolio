import React from "react";
import temp1 from "../assets/temp1.gif";

const About = () => {
  return (
    <div className="section">
      <div className="hero min-h-screen bg-neutral text-white">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={temp1}
            alt="temp1"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">About!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
