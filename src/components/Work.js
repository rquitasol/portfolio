import React from "react";
import temp2 from "../assets/temp2.gif";

const Work = () => {
  return (
    <div className="section">
      <div className="hero min-h-screen bg-accent">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={temp2}
            alt="temp2"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Work Experience!</h1>
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

export default Work;
