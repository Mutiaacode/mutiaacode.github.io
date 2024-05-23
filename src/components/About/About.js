import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/bocii.png"
            alt="logo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is Mutia Pegi Intanswari, and I am based in Indonesia. I am passionate about technology and love exploring new ways to solve problems through coding and development. Welcome to my portfolio!
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            I am currently a student at SMK Negeri 3 Metro, where I am pursuing a vocational education in Software Engineering (Rekayasa Perangkat Lunak). My coursework has provided me with a solid understanding of software development, programming, and problem-solving, equipping me with the technical skills necessary to thrive in the tech industry. In addition to my formal education, I actively participate in online courses and attend workshops to stay updated with the latest trends and advancements in technology.
            </ScrollAnimation>

            <br /><br />

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
