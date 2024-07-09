import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Welcome to Apollo Hospital, a beacon of excellence in healthcare. 
          Since our inception, Apollo Hospital has been committed to 
          providing world-class medical services with a patient-centric approach. 
          As one of the leading healthcare institutions, 
          we combine cutting-edge technology with compassionate care to ensure the 
          best possible outcomes for our patients.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
