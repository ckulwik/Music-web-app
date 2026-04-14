import React, { useEffect } from "react";
import animateMainImage from "../scripts/animation.js";

const Logo = ({ isDesktop }) => {

  useEffect(() => {
    isDesktop && animateMainImage();
  }, [isDesktop]);

  return (
    <>
      <div
        className="image-container"
        data-aos="flip-right"
        data-aos-duration="800"
        data-aos-delay="100"
        data-aos-once
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 20px',
          marginTop: '100px',
          marginBottom: '80px',
        }}
      >
        <img
          className="main-img"
          alt="chris kulwik music main logo, in colorful retro font"
          src="https://music-web-app-songs.s3.us-east-2.amazonaws.com/ChrisKulwikLogoSmaller.png"
          style={{
            maxWidth: '600px',
            width: '90%',
            height: 'auto',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        ></img>
      </div>
    </>
  );
};

export default Logo;
