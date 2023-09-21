import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>

        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi ,Everyone, I am <span className="purple">Abdallah Osama </span>
            from <span className="purple"> Cairo, Egypt.</span>
            <br /> i'm graduated from Computer and artificial intelligence Cairo university
            <br />
            Additionally,In july 2021 . i got million arab coders diploma in udacity , <br/>In Dec 2022 i got internship ministry of communications and information technology ,<br></br>In oct 2022. i got internship progrom in National Telecommunication institute for 2 months
            
     
            <br />
            <br />
                  
            I am recently  be  a Frontend developer at
            Orange digital center 
          </p>
       

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abdallah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
