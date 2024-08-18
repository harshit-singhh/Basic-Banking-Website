import React from "react";
import HomeImage from "../items/Bank_img.png";
import Typewriter from "typewriter-effect";

const HomePage = () => {
  return (
    <>
      <div className="home-topscreen">
        <div className="home-leftscreen">
          <h2>Sparks Bank</h2>
          <div className="typewriter-container">
            <h3>
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Your Wealth, Our Commitment..")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Empowering Your Financial Future")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Secure, Simple, Smart Banking")
                    .pauseFor(1000)
                    .start();
                }}
              />
            </h3>
          </div>
        </div>
        <img src={HomeImage} alt="React Logo" />
      </div>
    </>
  );
};

export default HomePage;
