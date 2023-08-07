import React from "react";
import "./Resume.module.css";

export default class Resume extends React.Component {
  render() {
    return (
      <div id="container">
        <div className="inner">
          <p className="tagline">Résumé</p>
          <p
            className="section-tagline"
            id="education"
            style={{ textAlign: "left" }}
          >
            Education
          </p>
          <div>
            <div className="logo">
              <a href="http://depaul.edu">
                <img
                  className="icon"
                  src="/Assets/depaul-logo.jpg"
                  alt="depaulLogo"
                />
              </a>
            </div>
            <div className="details">
              <b>DePaul University</b>
              <span className="right">
                <i>2017 - 2020</i>
              </span>
              <br />
              <b>Computer Science, M.S.</b>
              <span className="right">
                <i>Chicago, IL</i>
              </span>
            </div>
            <br />
            <br />
            Relevant Coursework:
            <br />
            <ul style={{ liststyle: "circle" }}>
              <li>Data Structures I &amp; II</li>
              <li>Applied Algorithms &amp; Data Structures</li>
              <li>Distributed Systems</li>
              <li>Object-Oriented Software Development</li>
              <li>Concurrent Development</li>
              <li>Compiler Design</li>
              <li>Javascript Post-Baccalaureate</li>
            </ul>
            <span className="skill">Java</span>
            <span className="skill">Javascript</span>
            <span className="skill">Python</span>
            <span className="skill">C/C++</span>
            <span className="skill">Git</span>
          </div>
          <br />
          <div>
            <div className="logo">
              <a href="http://generalassemb.ly">
                <img className="icon" src="/Assets/ga.jpg" alt="gaLogo" />
              </a>
            </div>
            <div className="details">
              <b>General Assembly</b>
              <span className="right">
                <i>2017</i>
              </span>
              <br />
              <b>Data Science Bootcamp</b>
              <span className="right">
                <i>Chicago, IL</i>
              </span>
            </div>
            <br />
            <br />
            10-week course (60 hrs.):
            <br />
            <ul style={{ liststyle: "circle" }}>
              <li>Exploratory Data Analysis, Model Fit & Visualization</li>
              <li>
                Linear &amp; Logistic Regression, KNN, Random Forest, Decision
                Trees, Time-series Analysis, NLP &amp; Webscraping
              </li>
              <li>
                Fundamental Machine-Learning &amp; Neural Network Concepts
                (TensorFlow/OpenCV)
              </li>
            </ul>
            <span className="skill">Python</span>
            <span className="skill">SciPy</span>
            <span className="skill">Pandas</span>
            <span className="skill">MatPlotLib</span>
            <span className="skill">BeautifulSoup</span>
          </div>
          <br />
          <div>
            <div className="logo">
              <a href="http://indiana.edu">
                <img className="icon" src="/Assets/iu.jpg" alt="iuLogo" />
              </a>
            </div>
            <div className="details">
              <b>Indiana University</b>
              <span className="right">
                <i>2009 - 2013</i>
              </span>
              <br />
              <b>Journalism, B.A.</b>
              <span className="right">
                <i>Bloomington, IN</i>
              </span>
            </div>
            <br />
            <br />
            <span className="skill">Javascript</span>
            <span className="skill">Photoshop</span>
            <span className="skill">InDesign</span>
            <span className="skill">Illustrator</span>
          </div>
          <br />
          <br />
          <p
            className="section-tagline"
            id="work"
            style={{ textAlign: "left" }}
          >
            Work Experience
          </p>
          <div>
            <div className="logo">
              <a href="https://www.launchpadlab.com/">
                <img className="icon" src="/Assets/lplicon.png" alt="mb" />
              </a>
            </div>
            <div className="details">
              <b>Launchpad Lab</b>
              <span className="right">
                <i>2020 - 2023</i>
              </span>
              <br />
              <b>
                <span id="jobTitle">Frontend Developer, Project Lead</span>
              </b>
              <span className="right">
                <i>Chicago, IL (Remote)</i>
              </span>
            </div>
            <br />
            <br />
            <p style={{ color: "#fafafa" }}>
              Built complex custom applications for clients across a broad range of verticals in both a primary Front End and project-lead Front End capacity. Worked in close cooperation with Product Managers, Designers and both Front and Back end developers to both gather client requirements and build products that exceeded client expectations.
            </p>
            <ul>
              <li>
                Worked closely with a client startup founder to produce an React/Rails based alpha build of his small-business investments platform on an aggressive timeline as the sole frontend developer paired with a single backend developer.
              </li>
              <li>
                Built a custom Salesforce live agent application to enable real-time chat functionality and document share between customer agents and product knowledge experts for a major pharmaceutical company.
              </li>
              <li>
                Spent a year and a half with a small team embedded with an enterprise financial services company building out a customer-facing React platform which automated and improved legacy processes surrounding asset custody. Our platform integrated disparate areas of the business and eliminated manual document processing and rework for key business units.
              </li>
              <li>
                Using React and Ionic, rebuilt a legacy desktop-only client portal into a desktop + mobile solution for an accounting firm specializing in the trucking vertical.
              </li>
            </ul>
            <br />
            <span className="skill">React</span>
            <span className="skill">Rails</span>
            <span className="skill">Ionic</span>
            <span className="skill">Hybrid Mobile</span>
            <span className="skill">Salesforce</span>
          </div>
          <br />
          <br />
          <div>
            <div className="logo">
              <a href="https://www.ezfunnls.com/">
                <img className="icon" src="/Assets/ezf.png" alt="mb" />
              </a>
            </div>
            <div className="details">
              <b>EzFunnls</b>
              <span className="right">
                <i>2018 - Closed (June 2019)</i>
              </span>
              <br />
              <b>
                <span id="jobTitle">Front End Engineer, Jr.</span>
              </b>
              <span className="right">
                <i>Chicago, IL</i>
              </span>
            </div>
            <br />
            <br />
            <p style={{ color: "#fafafa" }}>
              Developed a modern e-commerce platform designed to “change the way
              people sell things online”.
            </p>
            <ul>
              <li>
                Primary front end engineer tasked with prototyping and building
                out the storefront UI elements, checkout experience and merchant
                dashboard interface.
              </li>
              <li>
                Architected a performant recursive block rendering engine for
                our NPM library of hooks-based React functional components to
                lazy load client sales pages.
              </li>
              <li>
                Shared in backend tasks building out our API and integrating AWS
                Lambda services. Express backend built using MongoDB Atlas and
                S3 with GraphQL Yoga and Prisma API.
              </li>
              <li>
                Brought concept from bare bones to alpha launch in 5 months as
                the first hire on an eventual engineering team of six.
              </li>
            </ul>
            <br />
            <span className="skill">React</span>
            <span className="skill">Node</span>
            <span className="skill">Ant Design</span>
            <span className="skill">Sketch</span>
            <span className="skill">GraphQL</span>
            <span className="skill">Prisma</span>
            <span className="skill">Express</span>
            <span className="skill">MongoDB</span>
            <span className="skill">AWS S3</span>
          </div>
          <br />
          <br />
          <div>
            <div className="logo">
              <a href="http://www.bcvsocial.com/">
                <img className="icon" src="/Assets/bcv.png" alt="bcv" />
              </a>
            </div>
            <div className="details">
              <b>BCV Social</b>
              <span className="right">
                <i>2015 - 2018</i>
              </span>
              <br />
              <b>
                <span id="jobTitle">
                  {" "}
                  Jr. Account Executive, <span>Media &amp; Analytics</span>
                </span>
              </b>
              <span className="right">
                <i>Chicago, IL</i>
              </span>
            </div>
            <br />
            <br />
            <p>
              As a member of the BCV team, I actively managed social advertising
              strategy, targeting and execution for 30+ clients across Facebook,
              Instagram, Twitter & Pinterest. Collectively, I was responsible
              for over $100K in annual cross-platform spend.
              <br />
              <br />
              Implementing a new conversion-tracking process, which in one case
              found over $55,000 in unidentified revenue attribution, was one
              highlight of my experience.
              <br />
              <br />
              Building out ad hoc reporting dashboards, analyzing trends &
              providing key insights for client conversations were a part of my
              day-to-day routine.
            </p>
            <br />
            <span className="skill">Excel</span>
            <span className="skill">Tableau</span>
            <span className="skill">Javascript</span>
            <span className="skill">Social Media</span>
          </div>
          <br />
          <br />
          <div>
            <div className="logo">
              <a href="https://www.mbres.com/">
                <img
                  className="icon"
                  src="/Assets/MB-Real-Estate.jpg"
                  alt="mb"
                />
              </a>
            </div>
            <div className="details">
              <b>MB Real Estate</b>
              <span className="right">
                <i>2014 - 2016</i>
              </span>
              <br />
              <b>
                <span id="jobTitle">
                  Market Research <span>Coordinator</span>
                </span>
              </b>
              <span className="right">
                <i>Chicago, IL</i>
              </span>
            </div>
            <br />
            <br />
            <p>
              Working directly with an experienced commercial real estate team,
              I was responsible for managing multiple comprehensive databases
              cataloguing near real-time market metrics for analysis.
              <br />
              <br />
              My end product included a comprehensive quarterly market report
              which was cited often in Crain's Chicago, Globe St. and other real
              estate publications.
            </p>
            <br />
            <span className="skill">Excel</span>
            <span className="skill">InDesign</span>
            <span className="skill">Market Research</span>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
