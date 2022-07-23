import { GitCommit } from "react-feather";
import React from "react";
import Lottie from "lottie-react";
import Planet from "../lottie/planet.json";

// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, "chunk_inefficient", {
  value: function (chunkSize) {
    var array = this;
    return [].concat.apply(
      [],
      array.map(function (elem, i) {
        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
      })
    );
  },
});

function About() {
  return (
    <div className="container about ">
      <div className="mt-140 d-flex position-relative">
        <div className="content">
          <p className="fs-small text-active text-neon">Want to know more?</p>
          <h2 className="typing text-primary text-neon">About Me</h2>
          <p className="mt-16">Hello folks !!</p>
          <p className="mt-16">
            I enjoy creating things that live on the internet. My interest in
            both game development & direction turned me out into a frontend
            developer & writer (and a director). Started with HTML, CSS! & some
            random short film concepts!
          </p>
          <p className="mt-12">
            Fast-forward to today... as a developer learnt a lot in frontend
            thing, and I’ve had the privilege of working at a start-up, a huge
            corporation, and as well as freelancing. My main focus these days is
            building accessible, inclusive products for a variety of clients.
          </p>
          {/* <p className="mt-12">
            And as a writer still improving skills in my journey! 
          </p> */}
          <p className="mt-24">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="d-flex mt-16">
            {LIST.chunk_inefficient(4).map((sublist, idx) => (
              <div
                key={idx}
                className={`d-flex flex-column ${idx > 0 ? "ml-80" : ""}`}
              >
                {sublist.map((el) => (
                  <div className="d-flex" key={el}>
                    <GitCommit />
                    <p className="ml-8">{el}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="astro">
          <Lottie animationData={Planet} autoPlay loop />
        </div>
      </div>
    </div>
  );
}

export default About;

const LIST = [
  "JavaScript (ES6+)",
  "ReactJS",
  "NextJS",
  "GatsbyJS",
  "React Native",
  "TypeScript",
  "WordPress",
  "Laravel",
];
