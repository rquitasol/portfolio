import React from "react";

const Contact = () => {
  const divStyle = {
    textAlign: "center", // Center align text
    backgroundColor: "blue", // Background color
    height: "100vh", // Set height to 100vh for full viewport height
    width: "100%", // Set width to 100% for full viewport width
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={divStyle}>
      <h1>Contact</h1>
      <p>Content for Contact goes here.</p>
    </div>
  );
};

export default Contact;
