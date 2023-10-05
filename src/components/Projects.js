import React from "react";
import eazedesktop from "../assets/eazedine-desktop.png";
import thehome from "../assets/thehome.png";
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
      imageSrc: eazedesktop,
      imageUrl: "https://www.eazedine.com",
      url: "https://eazedine.netlify.app/",
      github: "https://github.com/rquitasol/eazedine",
    },
    {
      name: "The Home",
      description:
        "The Home is an NFT project catering to collectors within the Solana ecosystem. It offers a diverse range of interactive artworks for NFT staking. Users can explore unique lore for each page of The Home and visit a tea shop where they can use TEA currency, earned through staking, to acquire additional NFTs and real-world items.",
      stack: ["JavaScript", "React", "NextJs", "TailwindCSS", "Supabase"],
      imageSrc: thehome,
      imageUrl: "https://www.thehomeofthechildren.com",
      url: "",
      github: "",
    },
  ];

  const buttonStyle =
    "btn bg-neutral text-base-100 font-FuturaPTMedium w-24 mr-2";

  const redirectToWebsite = (websiteURL) => {
    if (websiteURL) window.open(websiteURL, "_blank");
  };

  const projectMap = projectData.map((data) => {
    return (
      <div className="card lg:card-side bg-base-100 text-neutral justify-center items-center px-10">
        <div
          className={`card-image ${
            isDesktop ? `w-[40%]` : `max-w-[250px] max-h-[250px]`
          } `}
        >
          <div className="mockup-browser border bg-base-300 ">
            <div className="mockup-browser-toolbar">
              <div className="input">{data.imageUrl}</div>
            </div>
            <div className="flex flex-grow justify-center align-middle bg-base-200">
              <figure>
                <img src={data.imageSrc} alt="Album" />
              </figure>
            </div>
          </div>
        </div>
        <div className="card-body max-w-4xl align-top">
          <h2 className="card-title text-2xl lg:text-3xl xl:text-4xl font-FuturaPTHeavy ">
            {data.name}
          </h2>
          <div className="text-sm lg:text-base xl:text-lg text-justify ">
            {data.description}
          </div>
          <div className="text-left font-FuturaPTMedium">Tech stack: </div>
          <div
            className={`flex flex-col flex-wrap ${
              isDesktop ? " max-h-40" : " max-h-24"
            }`}
          >
            {data.stack.map((stack, stackIdx) => (
              <div
                key={"stack_" + stackIdx}
                className="flex items-center font-FuturaPTMedium ml-5 mt-2"
              >
                <b className="font-FuturaPTExtraBold text-secondary mr-4">+</b>
                {stack}
              </div>
            ))}
          </div>
          <div className="flex justify-start mr-10 mt-10">
            <button
              className={buttonStyle}
              onClick={() => redirectToWebsite(data.url)}
            >
              Site
            </button>
            <button
              className={buttonStyle}
              onClick={() => redirectToWebsite(data.github)}
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="section">
      <div className=" min-h-screen bg-ffa559 text-secondary ">
        <div className="hero-content min-w-screen max-w-full items-center justify-center">
          <div className="carousel-container ">
            <div id="main" className="items-center">
              <h1
                className={`font-FuturaPTHeavy text-neutral text-4xl text-center ${
                  isDesktop
                    ? "header-desktop pt-40   pb-10"
                    : "header-mobile pb-3 pt-14 "
                }`}
              >
                Personal Projects
              </h1>
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                className="carousel-full-screen items-center justify-center"
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
