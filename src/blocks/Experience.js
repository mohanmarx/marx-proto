import React from "react";
import Lottie from "lottie-react";
import Code from "../lottie/code.json";

const Experience = () => {
  return (
    <section className="container experience">
      <div className="mt-140 d-flex position-relative">
        <div className="coding">
          <Lottie animationData={Code} autoPlay loop />
        </div>
        <div className="content">
          <p className="fs-small text-active">Are you serious about?</p>
          <h2 className="typing text-primary">My Experience</h2>
          <p className="mt-12">
            Frontend developer with {getMonths().years} years{" "}
            {getMonths().months % 12 > 0 ? `+` : ""} of of proven leadership and
            meaningfully contributions to teams of varying size and scope.
            {/* Helping companies create and maintain a better code base for
            reusability. Experience in driving projects forward as the
            development team leader, facilitating projects from concept to
            launch. Passionate about learning and development with a desire to
            apply skills on a larger development team at Redfin. Eager to tackle
            more complex problems and continue to find ways to maximize user
            efficiency. */}
          </p>
          <p className="mt-12">
            Since beginning my journey as a developer I’ve done remote work for
            agencies, consulted for startups, and collaborated with talented
            people to create web products for both business and consumer use.
          </p>
          <p className="mt-12">
            I had many opportunities to work in a vast spectrum of web
            technologies what let me gather a significant amount of various
            experience. Working for companies and individuals around the globe I
            met and learnt from amazing and ambitious people.
          </p>
          <div aria-label="workexp">
            <aside className="__navigation">
              {LIST.map((el) => (
                <div key={el} className="nav__btn" />
              ))}
            </aside>
            <div id="Xorstack" className="__exp_list"></div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="typing text-primary mt-80">Skills</h2>
        <div className="mt-16">
          <p>ReactJs & JavaScript</p>
          <Progress width={"90%"} />
        </div>
        <div className="mt-16">
          <p>NextJS & GatsbyJs</p>
          <Progress width={"85%"} />
        </div>
        <div className="mt-16">
          <p>React Native</p>
          <Progress width={"80%"} />
        </div>

        <div className="mt-16">
          <p>Laravel</p>
          <Progress width={"80%"} />
        </div>
      </div>
    </section>
  );
};

export default Experience;

const LIST = ["Xorstack", "cognitive clouds software pvt ltd", "Dukaan"];

const getMonths = () => {
  const date1 = new Date();
  const date2 = new Date(2019, 5, 1);
  var diff = Math.floor(date1.getTime() - date2.getTime());
  var day = 1000 * 60 * 60 * 24;
  var days = Math.floor(diff / day);
  var months = Math.floor(days / 31);
  var years = Math.floor(months / 12);
  return { months, years, days };
};

const Progress = ({ width }) => {
  return (
    <div
      className="progress w-100"
      data-width="90%"
      data-background="#08fdd8"
      max="100"
    >
      <span style={{ width }} />
    </div>
  );
};
