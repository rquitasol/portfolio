import React, { useState } from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import emailjs from "emailjs-com";

const Contact = ({ isDesktop }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [emailDialogMessage, setEmailDialogMessage] = useState("");
  const [alertClass, setAlertClass] = useState("alert-success");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setAlertClass("alert-success");
          setEmailDialogMessage("Email sent successfully!");
          setShowAlert(true);
        },
        (error) => {
          setAlertClass("alert-error");
          setEmailDialogMessage("Email sending failed!");
          setShowAlert(true);
        }
      )
      .finally(
        setTimeout(() => {
          setShowAlert(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        }, 5000)
      );
  };

  const redirectToLinkedIn = () => {
    const websiteURL = "https://www.linkedin.com/in/romelquitasol/";
    window.open(websiteURL, "_blank");
  };

  const redirectToGitHub = () => {
    const websiteURL = "https://github.com/rquitasol";
    window.open(websiteURL, "_blank");
  };

  const buttonStyle = "btn bg-primary text-base-100 mr-2";

  return (
    <div className="section">
      <div className="hero min-h-screen bg-primary text-secondary text-lg">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1
              className={`font-extrabold  ${
                isDesktop ? "header-desktop" : "header-mobile"
              }`}
            >
              Send me a message!
            </h1>
            <p
              className={`py-6 font-medium 
             ${isDesktop ? "paragraph-desktop" : "paragraph-mobile"}
            `}
            >
              Got a question or proposal, or just want to say hello? You can
              also contact me through these platforms
            </p>
            <button className={buttonStyle} onClick={redirectToLinkedIn}>
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 mr-2" />
              LinkedIn
            </button>
            <button className={buttonStyle} onClick={redirectToGitHub}>
              <img src={github} alt="GitHub" className="w-6 h-6 mr-2" />
              GitHub
            </button>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-black">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  {showAlert && (
                    <div className={`alert ${alertClass}`}>
                      <span>{emailDialogMessage}</span>
                    </div>
                  )}
                  <label className="label" htmlFor="name">
                    <span className="label-text">Your name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    id="name"
                    name="name"
                    value={formData.name}
                    className="input input-bordered"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="email">
                    <span className="label-text">Email Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="message">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    rows={isDesktop ? "5" : "3"}
                    placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
