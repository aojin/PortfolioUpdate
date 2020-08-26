import React from "react";
import { Wrapper, Cards, Tagline } from "./Styles";
import Card from "./Card";

const projects = [
  {
    projectTitle: "ClimbShop E-Commerce Project",
    description:
      "Classic MERN application - A MaterialUI + ReactJS Front End built on NodeJS backend with Mongo Atlas DB. Built on Express framework with Apollo server GraphQL middleware.",
    href: "https://climbshop.herokuapp.com/",
    technologies: ["react", "material", "node", "mongo", "express", "gql"],
    githubLink: false,
  },
  {
    projectTitle: "GitHub Web Framework Comparison",
    description:
      "A React front end application paired with an Express & Node.js back-end. Fetch for async/await REST calls & Cheerios.js to load web-scraped data",
    href: "https://github-framework-app.herokuapp.com/",
    technologies: ["react", "material", "node", "express", "gql"],
    githubLink: false,
  },
  {
    projectTitle: "GraphQL + SpaceX API",
    description:
      "A first foray into GraphQL type defs and resolvers based off a tutorial implementation. Taught me the fundamentals which I later custom integrated into ClimbShop.",
    href: "https://spacexreactapollo.herokuapp.com/",
    technologies: ["node", "gql"],
    githubLink: false,
  },
  {
    projectTitle: "JPaint",
    description:
      "An object-oriented paint program implemented in Java using the Swing Canvas GUI",
    href: "https://github.com/aojin/JPaintSwing",
    technologies: ["java"],
    githubLink: true,
  },
  {
    projectTitle: "Java Sockets Server",
    description:
      "A Java Sockets based server in both synchronous blocking and asynchronous multi-threaded flavors",
    href: "https://github.com/aojin/JokeServers",
    technologies: ["java"],
    githubLink: true,
  },
  {
    projectTitle: "D3 Circle Pack Visualization",
    description:
      "Simple, interactive D3 data viz implementation served on static HTML page",
    href: "https://aojin-d3-circle-pack.herokuapp.com/",
    technologies: ["D3", "html5", "js"],
  },
  // {
  //   projectTitle: "Algorithms",
  //   description: "Sample Algorithms coursework implemented in Java",
  //   href: "https://github.com/aojin/Algorithms",
  //   technologies: ["java"],
  //   githubLink: true,
  // },
];

const ProjectsGrid = () => {
  return (
    <Wrapper>
      <Tagline>Projects</Tagline>
      <Cards>
        {projects.map((project) => {
          return (
            <Card
              title={project.projectTitle}
              description={project.description}
              href={project.href}
              githubLink={project.githubLink}
              technologies={project.technologies}
            />
          );
        })}
      </Cards>
    </Wrapper>
  );
};

export default ProjectsGrid;
