import React from "react";

const Work = () => {
  const divStyle = {
    textAlign: "center", // Center align text
    backgroundColor: "green", // Background color
    height: "100vh", // Set height to 100vh for full viewport height
    width: "100%", // Set width to 100% for full viewport width
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={divStyle}>
      <h1>Work</h1>
      <p>Content for Work goes here.</p>
    </div>
  );
};

export default Work;
