import React from "react";
import { render } from "react-dom";
import { useTrail, animated as a } from "react-spring";
import { AnimatedText, Wrapper } from "./Styles";

const items = ["Specializing", "In Front End", "Development"];
const config = { mass: 5, tension: 2000, friction: 200 };

function SpringTrailHero() {
  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 500, height: 0 },
  });

  return (
    <Wrapper>
      {trail.map(({ x, height, ...rest }, index) => (
        <AnimatedText
          key={items[index]}
          style={{
            transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
          }}
        >
          <a.div style={{ height }}>{items[index]}</a.div>
        </AnimatedText>
      ))}
    </Wrapper>
  );
}

export default SpringTrailHero;
