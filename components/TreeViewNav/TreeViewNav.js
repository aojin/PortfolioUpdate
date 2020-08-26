import React from "react";
import PropTypes from "prop-types";
import SvgIcon from "@material-ui/core/SvgIcon";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Collapse from "@material-ui/core/Collapse";
import { Typography } from "@material-ui/core";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support

import { Container, ProjectLink } from "./Styles";

import ChevronRightSharpIcon from "@material-ui/icons/ChevronRightSharp";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

function MinusSquare(props) {
  return (
    <SvgIcon
      fontSize="inherit"
      color="secondary"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon
      fontSize="inherit"
      color="secondary"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function LeafIcon(props) {
  return (
    <ChevronRightSharpIcon
      className="close"
      fontSize="inherit"
      color="secondary"
      style={{ width: 14, height: 14 }}
      {...props}
    ></ChevronRightSharpIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    "& .close": {
      // opacity: 0.3
    },
    marginLeft: 8,
  },
  group: {
    marginRight: 10,
    marginTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    borderRight: `1px dashed ${fade(theme.palette.text.secondary, 0.4)}`,
  },
  label: {
    backgroundColor: "transparent !important",
  },
  content: {
    marginTop: 12,
  },
}))((props) => (
  <TreeItem
    {...props}
    label={buildLabel(props.label)}
    TransitionComponent={TransitionComponent}
  />
));

const useStyles = makeStyles({
  root: {
    background: "rgba(0, 0, 0, 0.90)",
  },
});

const handleNavExpand = (e, isExpanded) => {};

const handleLabelClick = (tag) => {
  window.location.href = "#" + tag;
};

const buildLabel = (tag) => (
  <Typography variant="subtitle1" color="textSecondary">
    {tag}
  </Typography>
);

export default function CustomizedTreeView() {
  const classes = useStyles();

  return (
    <Container id="treeViewContainer">
      <TreeView
        id="treeViewComponent"
        dir="rtl"
        multiSelect={false}
        className={classes.root}
        onNodeToggle={handleNavExpand}
        defaultExpanded={[]}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        defaultEndIcon={<LeafIcon />}
      >
        <StyledTreeItem nodeId="1" label="navigation">
          <StyledTreeItem
            style={{ margin: "12px 0" }}
            onClick={(e) => {
              e.preventDefault();
              handleLabelClick("");
            }}
            endIcon={<HomeOutlinedIcon color="secondary" />}
            nodeId="2"
            label="home"
          />

          <StyledTreeItem
            nodeId="3"
            label="resume/cv -"
            onLabelClick={(e) => {
              e.preventDefault();
              handleLabelClick("resume");
            }}
          >
            <a style={{ fontFamily: "inherit" }} href="/2020Resume.pdf">
              export pdf
            </a>
          </StyledTreeItem>
          <StyledTreeItem
            onLabelClick={(e) => {
              e.preventDefault();
              handleLabelClick("projects");
            }}
            nodeId="5"
            label="projects -"
          >
            <StyledTreeItem
              nodeId="6"
              label={
                <ProjectLink href="https://climbshop.herokuapp.com/">
                  climbShop
                </ProjectLink>
              }
            />
            <StyledTreeItem
              nodeId="7"
              label={
                <ProjectLink href="https://github-framework-app.herokuapp.com/">
                  ghFrameworks
                </ProjectLink>
              }
            />
            <StyledTreeItem
              nodeId="8"
              label={
                <ProjectLink href="https://spacexreactapollo.herokuapp.com//">
                  spacexGQL
                </ProjectLink>
              }
            />
            <StyledTreeItem
              nodeId="9"
              label={
                <ProjectLink href="https://github.com/aojin/JPaintSwing">
                  jPaint
                </ProjectLink>
              }
            />
            <StyledTreeItem
              nodeId="10"
              label={
                <ProjectLink href="https://github.com/aojin/JokeServers">
                  javaSocketsServer
                </ProjectLink>
              }
            />
            <StyledTreeItem
              nodeId="11"
              label={
                <ProjectLink href="https://aojin-d3-circle-pack.herokuapp.com/">
                  d3CirclePack
                </ProjectLink>
              }
            />
          </StyledTreeItem>
        </StyledTreeItem>
      </TreeView>
    </Container>
  );
}
