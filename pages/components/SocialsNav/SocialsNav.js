import React, { useState } from "react";
import { Container, BadgeRow } from "./Styles";
import { Button, ListItem } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { useSpring, animated } from "react-spring";

const SocialsNav = () => {
  const [visible, setVisible] = useState(true);

  const handleToggle = () => {
    setVisible(!visible);
  };

  const props = useSpring({
    from: {
      opacity: 1,
      marginRight: 0,
    },
    to: {
      opacity: 1,
      marginRight: 0,
    },
  });

  return (
    <Container>
      {visible ? (
        <animated.div style={props}>
          <BadgeRow>
            <Button
              startIcon={<LinkedInIcon />}
              color="primary"
              aria-label="to LinkedIn"
              href="https://www.linkedin.com/in/alex-jin-aa1b2744/"
            ></Button>
            <a href="mailto:ajin1@mail.depaul.edu" target="_top">
              <Button
                startIcon={<GitHubIcon />}
                color="primary"
                aria-label="to GitHub"
                href="https://github.com/aojin"
              ></Button>
            </a>
            <ListItem>
              <a
                style={{ color: "#fafafa", paddingTop: "4px" }}
                href="mailto:ajin1@mail.depaul.edu"
                target="_top"
              >
                <MailOutlineIcon />
              </a>
            </ListItem>

            <Button onClick={handleToggle} color="primary" aria-label="close">
              <ArrowRightIcon />
            </Button>
          </BadgeRow>
        </animated.div>
      ) : (
        <Button onClick={handleToggle} color="primary" aria-label="open">
          <ArrowRightIcon />
        </Button>
      )}
    </Container>
  );
};

export default SocialsNav;
