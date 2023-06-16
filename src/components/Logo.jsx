import React from "react";
import "../styles/app.css";

const Logo = () => {
  return (
    <>
      <div
        className="image-container"
        data-aos="flip-right"
        data-aos-duration="800"
        data-aos-delay="100"
        data-aos-once
      >
        <img
          className="main-img"
          alt="chris kulwik music main logo, in colorful retro font"
          src="https://music-web-app-songs.s3.us-east-2.amazonaws.com/ChrisKulwikLogoSmaller.png"
        ></img>
      </div>
    </>
  );
};

export default Logo;
