import { Linkedin, GitHub, Twitter, Instagram, GitCommit } from "react-feather";
import React from "react";
import Lottie from "lottie-react";
import Planet from "./planet.json";
import Moon from "./moon.json";
import Stars from "./star1.json";

function App() {
  return (
    <div className="main_page">
      <SocialBanner />
      <div className="App">
        <section class="container home-banner position-relative">
          <div className="" style={{ position: "absolute" }}>
            <Lottie animationData={Stars} autoPlay loop />
          </div>
          <div className="logo_container">
            <h1 className="flikker-text">
              MO<span id="offset">H</span>AN
            </h1>
            <img className="logo" src="/marx.png" alt="logo" />
            <h1 className="flikker-text">
              K<span id="offset">U</span>MAR
            </h1>
          </div>
          <div className="text-center mt-20">
            <h2>Brings ideas & designs to life with code.</h2>
            <div class="typewriter mt-8">
              <h2 className="typing">- Frontend Developer.</h2>
            </div>
            <p className="mt-16">
              I’m a software engineer specializing in building (and occasionally
              designing) <br /> exceptional digital experiences. Currently, I’m
              focused on building accessible, human-centered products
            </p>
          </div>
        </section>
        <section className="container about ">
          <div className="mt-140 d-flex position-relative">
            <div className="content">
              <p>Want to know more?</p>
              <h2 className="typing">About Me</h2>
              <p className="mt-16">Hello folks !!</p>
              <p className="mt-16">
                I enjoy creating things that live on the internet. My interest
                in game development turned me out into a frontend developer.
                Started with HTML & CSS!
              </p>
              <p className="mt-12">
                Fast-forward to today... learnt a lot in frontend thing, and
                I’ve had the privilege of working at a start-up, a huge
                corporation, and as well as freelancing. My main focus these
                days is building accessible, inclusive products for a variety of
                clients.
              </p>
              <p className="mt-24">
                Here are a few technologies I’ve been working with recently:
              </p>
              <div className="d-flex mt-16">
                <div className="d-flex flex-column">
                  {[...LIST.slice(0, 4)].map((el) => (
                    <div className="d-flex">
                      <GitCommit />
                      <p className="ml-8">{el}</p>
                    </div>
                  ))}
                </div>
                <div className="d-flex flex-column ml-80">
                  {[...LIST.slice(4, 8)].map((el) => (
                    <div className="d-flex">
                      <GitCommit />
                      <p className="ml-8">{el}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="astro">
              <Lottie animationData={Planet} autoPlay loop />
            </div>
          </div>
        </section>
        <section className="container get_touch position-relative">
          <div style={{ position: "absolute", top: 0, opacity: 0.4 }}>
            <Lottie animationData={Moon} autoPlay loop />
          </div>
          <div className="text-center w-50 mx-auto mt-140">
            <p>What’s Next?</p>
            <h2 className="typing">Get In Touch</h2>
            <p className="mt-16">
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </p>

            <a
              type="button"
              className="mail-link"
              href="mailto:kumarmohan7746@gmail.com"
            >
              Say Hello
            </a>
          </div>
        </section>
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

const LIST = [
  "JavaScript (ES6+)",
  "React JS",
  "Next JS",
  "Gatsby JS",
  "React Native",
  "TypeScript",
  "WordPress",
  "Laravel",
];
