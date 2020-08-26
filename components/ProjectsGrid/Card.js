import React from "react";

import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

import {
  CardWrapper,
  Card,
  CardImage,
  CardContent,
  BadgeRow,
  Badge,
  CardTitle,
  CardText,
} from "./Styles";

const logos = {
  react: "/Assets/react.svg",
  material: "/Assets/material-ui.svg",
  node: "/Assets/Node.js_logo.svg",
  express: "/Assets/Expressjs.png",
  mongo: "/Assets/mongo.png",
  gql: "/Assets/GraphQL_Logo.svg.png",
  java: "/Assets/javaLogo.png",
  D3: "/Assets/d3.png",
  js: "/Assets/jsLogo.png",
  html5: "/Assets/1024px-HTML5_logo_and_wordmark.svg.png",
};

const ProjectCard = ({
  title,
  description,
  href,
  githubLink,
  technologies,
}) => {
  return (
    <CardWrapper>
      <Card>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          <BadgeRow>
            {technologies.map((tech) => {
              const imageSrc = logos[tech] || null;
              return <Badge key={tech} src={imageSrc} />;
            })}
          </BadgeRow>
        </CardContent>
        <CardActions>
          <Link href={href}>
            {githubLink ? (
              <Button size="small">View GitHub</Button>
            ) : (
              <Button size="small">View The App</Button>
            )}
          </Link>
        </CardActions>
      </Card>
    </CardWrapper>
  );
};

export default ProjectCard;
