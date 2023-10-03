import React from "react";
import temp from "../assets/temp.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/Carousel.css";

const Projects = ({ isDesktop }) => {
  const projectData = [
    {
      name: "Eazdine",
      description:
        "EazeDine offers cutting-edge solutions for restaurants and diners. Their Smart QR Menu simplifies ordering for customers, while their IoT Printer streamlines order processing. A comprehensive dashboard provides insights into sales and customer preferences. Their AI-powered Menu of the Day offers personalized recommendations. EazeDine aims to enhance the dining experience through technology integration.",
      stack: ["JavaScript", "React", "TailwindCSS", "Supabase"],
    },
    {
      name: "The Home",
      description:
        "The Home is an NFT project catering to collectors within the Solana ecosystem. It offers a diverse range of interactive artworks for NFT staking. Users can explore unique lore for each page of The Home and visit a tea shop where they can use TEA currency, earned through staking, to acquire additional NFTs and real-world items.",
      stack: ["JavaScript", "React", "NextJs", "TailwindCSS", "Supabase"],
    },
  ];

  const projectMap = projectData.map((data) => {
    return (
      <div className="card lg:card-side bg-base-100 shadow-xl text-neutral text-left ">
        <div className="card-image">
          <figure>
            <img
              src={temp}
              alt="Album"
              className={
                isDesktop
                  ? `max-w-[100%] max-h-[100%]`
                  : `max-w-[300px] max-h-[300px]`
              }
            />
          </figure>
        </div>
        <div className="card-body ">
          <h2 className="card-title text-2xl lg:text-3xl xl:text-4xl ">
            {data.name}
          </h2>
          <div className="text-sm lg:text-base xl:text-lg text-justify ">
            {data.description}
          </div>
          <div>Tech stack: </div>
          <div className="flex flex-col flex-wrap max-h-40">
            {data.stack.map((stack, stackIdx) => (
              <div
                key={"stack_" + stackIdx}
                className="flex items-center font-FuturaPTLight ml-5 mt-2"
              >
                <b className="font-FuturaPTExtraBold text-secondary mr-4">+</b>
                {stack}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="section">
      <div className=" min-h-screen bg-ffa559 text-secondary">
        <div className="hero-content  min-w-screen max-w-full">
          <div className="carousel-container min-h-screen">
            <div>
              <h1
                className={`font-FuturaPTHeavy text-neutral text-4xl pt-20 text-left ${
                  isDesktop ? "header-desktop  pb-10" : "header-mobile pb-3"
                }`}
              >
                Personal Projects
              </h1>
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                className="carousel-full-screen"
              >
                {projectMap.map((card, index) => (
                  <div key={index} className="carousel-slide-content flex ">
                    {card}
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
