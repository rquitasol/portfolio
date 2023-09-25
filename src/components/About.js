import React from "react";

const About = () => {
  const divStyle = {
    textAlign: "center", // Center align text
    backgroundColor: "red", // Background color
    height: "100vh", // Set height to 100vh for full viewport height
    width: "100%", // Set width to 100% for full viewport width
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={divStyle}>
      <h1>About</h1>
      <p>Content for About goes here.</p>
    </div>
  );
};

export default About;
