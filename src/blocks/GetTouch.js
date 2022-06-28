import React from "react";
import Lottie from "lottie-react";
import Moon from "../lottie/moon.json";

function GetTouch() {
  return (
    <section className="container get_touch position-relative">
      <div className="text-center w-50 mx-auto mt-140">
        <p className="fs-small text-active">What’s Next?</p>
        <h2 className="typing text-primary">Get In Touch</h2>
        <p className="mt-16">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>

        <a
          type="button"
          className="mail-link"
          href="mailto:kumarmohan7746@gmail.com"
        >
          Say Hello
        </a>
      </div>
      <div style={{ position: "absolute", top: 0, left: "40%", opacity: 0.4 }}>
        <Lottie animationData={Moon} autoPlay loop />
      </div>
    </section>
  );
}

export default GetTouch;
