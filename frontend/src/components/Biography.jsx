import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Our Mission</p>
          <h3></h3>
          <p>
           Our mission is to deliver comprehensive healthcare of the highest quality, 
           fostering a culture of continuous improvement and innovation. 
           We strive to set new standards in medical care,
           making advanced treatments accessible and affordable to all.
          </p>
          <p>We are all in 2024!</p>
          <p></p>
          <p>
           Our state-of-the-art facilities are equipped with the latest medical technology,
           and our team of highly skilled doctors, nurses, and support staff are dedicated
           to providing exceptional care tailored to each patient’s needs.
          </p>
          <p></p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
