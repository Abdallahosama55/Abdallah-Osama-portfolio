import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
      
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
   
          <Col md={4} className="project-card">
          <Bounce left duration={2000} >
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title=" Parkinson’s diseases Detection"
              description="An AI-based project that aims to help People to detect Parkinson's diseases in early stages with high accuracy reach to 99.8%.📈🦾

              • The project involves a✨ Fully Responsive✨ Web application that deploys the Detection model with high performance and reliability 🌐
              "
              ghLink="https://github.com/Abdallahosama55/grad_project"
              demoLink="https://drive.google.com/file/d/1a-vCBkiAZ27DENGgg3Y_zOuojCeRF5IO/view"
            />
            </Bounce>
          </Col>
     
          <Col md={4} className="project-card">
          <Bounce right duration={2000} >
      
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="medtiro"
              description="medtiro is a website Provides All Health Care Solution Protect Your Health And Take Care To Of Your Health 
              contact with doctor and more ,it designed using html css js react , redux , react routing"
              ghLink="https://github.com/Abdallahosama55/Meditro"
              demoLink="https://abdallahosama55.github.io/Meditro/"
            />
            </Bounce>
          </Col>
          <Col md={4} className="project-card">
          <Bounce left duration={2000} >
          <ProjectCard
            imgPath={leaf}
            isBlog={false}
            title="ODC Courses platform"
            description="odc courses platform represent to orange digital center platform it fully mangement tool to manage  courses and event  that be on campus 
            involves home page that include upcoming events and courses , dashboard that including enrolled course , assignment , completed courses and generate certification."
            ghLink="https://github.com/Abdallahosama55/Odc_offline"
            demoLink="."
          />
          </Bounce>
        </Col>
    
        

          <Col md={4} className="project-card">
          <Bounce left duration={2000} >
            <ProjectCard
            
              imgPath={suicide}
              isBlog={false}
              title="Ecommerce website"
              description="E_commerce website for selling glasses and shopping online (Responsive design and high reliability and performance )


              user can
              add to cart
              ,add glasses to fav list
              ,shopping and change the color of glasses
              ,signup ,login and logout
              ,authorization && authentication has been ."
              ghLink="https://github.com/Abdallahosama55/e_commerace_glasses"
              demoLink="https://drive.google.com/file/d/1039Ow4XUWYGwgL4ThTF7m9EbZQu5M2xZ/view?usp=sharing"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
            </Bounce>
          </Col>
          <Col md={4} className="project-card">
          <Bounce  duration={2000} >
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Axies Marketplace"
              description="Axies is a Responsive website created by html css js(es6) bootstrap React Js
              website is a marketplace of monster characte , top seller , most Popular Collection"
              ghLink="https://github.com/Abdallahosama55/Axies_website_react"
              demoLink="https://axeis.vercel.app/?fbclid=IwAR1RRh375PdM2LCYll-igOu3cXHJVa-_yY6qiLss9vtrPgevI2IbZ6aWIfU"              
            />
            </Bounce>
          </Col>

          <Col md={4} className="project-card">
          <Bounce right duration={2000} >
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="TAP Cash"
              description="Tap Cash is an e-wallet service that offers a variety of financial services aimed at providing convenience and security to its users. With a user-friendly interface, it allows individuals to make payments, transfer money, and monitor their expenses in real-time. The platform ensures maximum convenience and security, making it an efficient and reliable solution for managing finances."

              ghLink="https://github.com/Abdallahosama55/TapCach-Orange-Hackthon-frontend"
              demoLink="https://drive.google.com/file/d/1sSC40nvQZ9CmK_QVON4VabcmcB55DsiK/view?usp=sharing"     
            />
            </Bounce>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
