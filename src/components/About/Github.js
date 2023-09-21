import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
function Github() {
  return (
    <Fade  duration={2000}>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
 
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Abdallahosama55"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
     
    </Row>
    </Fade>
  );
}

export default Github;
