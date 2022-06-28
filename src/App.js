import { Linkedin, GitHub, Twitter, Instagram } from "react-feather";
import React from "react";
import About from "./blocks/About";
import Experience from "./blocks/Experience";
import GetTouch from "./blocks/GetTouch";
import Intro from "./blocks/Intro";

function App() {
  return (
    <div className="main_page">
      <SocialBanner />
      <div className="App">
        <Intro />
        <About />
        <Experience />
        <GetTouch />

        <section className="container mt-100">
          <div className="mx-auto text-center">
            <SocialBannerMobile />
            <p>Designed & Built by Mohan_marx</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

const SocialBanner = () => {
  return (
    <div className="social-desk">
      <Linkedin
        onClick={() =>
          openInNewTab(`https://www.linkedin.com/in/mohan-kumar-75a024143/`)
        }
      />
      <GitHub onClick={() => openInNewTab(`https://github.com/mohanmarx`)} />
      <Instagram
        onClick={() => openInNewTab(`https://www.instagram.com/mohan_marx/`)}
      />
      <Twitter
        onClick={() => openInNewTab(`https://twitter.com/Urstrulymohan_`)}
      />
      <div className="line" />
    </div>
  );
};

const SocialBannerMobile = () => {
  return (
    <div className="social-desk-mobi">
      <Linkedin
        onClick={() =>
          openInNewTab(`https://www.linkedin.com/in/mohan-kumar-75a024143/`)
        }
      />
      <GitHub onClick={() => openInNewTab(`https://github.com/mohanmarx`)} />
      <Instagram
        onClick={() => openInNewTab(`https://www.instagram.com/mohan_marx/`)}
      />
      <Twitter
        onClick={() => openInNewTab(`https://twitter.com/Urstrulymohan_`)}
      />
    </div>
  );
};

const openInNewTab = (url) => {
  window.open(url, "_blank").focus();
};

// const dots = [...[...Array(12)].map((el) => new Dot())];
// var mouse = {
//   x: 0,
//   y: 0,
// };

// animate();
// window.addEventListener("mousemove", function (event) {
//   event.preventDefault();
//   mouse.x = event.pageX;
//   mouse.y = event.pageY;
// });

// const animate = () => {
//   draw();
//   requestAnimationFrame(animate);
// };

// const draw = () => {
//   // Make sure the mouse position is set everytime
//   // draw() is called.
//   var x = mouse.x,
//     y = mouse.y;

//   // This loop is where all the 90s magic happens
//   dots.forEach(function (dot, index, dots) {
//     var nextDot = dots[index + 1] || dots[0];

//     dot.x = x;
//     dot.y = y;
//     dot.draw();
//     x += (nextDot.x - dot.x) * 0.6;
//     y += (nextDot.y - dot.y) * 0.6;
//   });
// };

// var Dot = function () {
//   this.x = 0;
//   this.y = 0;
//   this.node = (function () {
//     var n = document.createElement("div");
//     n.className = "trail";
//     document.body.appendChild(n);
//     return n;
//   })();
// };

// Dot.prototype.draw = function () {
//   this.node.style.left = this.x + "px";
//   this.node.style.top = this.y + "px";
// };
