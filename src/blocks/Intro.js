import React from "react";
import Lottie from "lottie-react";
import Stars from "../lottie/star1.json";
import ReactRotatingText from "react-rotating-text";

function Intro() {
  return (
    <section className="container home-banner position-relative">
      <div className="" style={{ position: "absolute", zIndex: 0 }}>
        <Lottie animationData={Stars} autoPlay loop />
      </div>
      <div className="logo_container">
        <h1 className="flikker-text">
          MO<span id="offset">H</span>AN
        </h1>
        <div className="logo">
          <img src="/marx.png" alt="logo" />
        </div>
        <h1 className="flikker-text">
          K<span id="offset">U</span>MAR
        </h1>
      </div>
      <div className="text-center mt-20">
        <h2 className="text-primary">
          Brings ideas & designs to life with code.
        </h2>
        <div className="typewriter mt-8">
          <ReactRotatingText
            items={["- Frontend Developer."]}
            // items={["- Frontend Developer.", "- Writer & Director."]}
          />
        </div>
        <p className="mt-16">
          I’m a software engineer specializing in building (and occasionally
          designing) <br /> exceptional digital experiences. Currently, I’m
          focused on building accessible, human-centered products.
          {/* <br />
          As a passion I'm a writer & director */}
        </p>
      </div>
    </section>
  );
}

export default Intro;
