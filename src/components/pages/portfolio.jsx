import React from "react";
import { StyledPortfolio, LogoContainer } from "../styles/portfolioStyle";

import facebook from "../../assets/Images/facebook.png";
import ferrari from "../../assets/Images/ferrari.png";
import hp from "../../assets/Images/hp.png";
import netflix from "../../assets/Images/netflix.png";
import philliips from "../../assets/Images/philliips.png";
import apple from "../../assets/Images/apple.png";
import twitch from "../../assets/Images/twitch.png";
import { Container } from "react-bootstrap";

function Portfolio() {
  return (
    <StyledPortfolio id="portfolio">
      <LogoContainer>
        <h2>Our Happy Customers</h2>
        <Container>
          <a href="https://fb.com/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="" />
          </a>
          <a href="https://twitch.com/" target="_blank" rel="noreferrer">
            <img src={twitch} alt="" />
          </a>
          <a href="https://apple.com/" target="_blank" rel="noreferrer">
            <img src={apple} alt="" />
          </a>
          <a href="https://www.netflix.com/" target="_blank" rel="noreferrer">
            <img src={netflix} alt="" />
          </a>
          <a href="https://hp.com/" target="_blank" rel="noreferrer">
            <img src={hp} alt="" />
          </a>
          <a href="https://ferrari.com/" target="_blank" rel="noreferrer">
            <img src={ferrari} alt="" />
          </a>
          {
            <a href="https://phillips.com/" target="_blank" rel="noreferrer">
              <img src={philliips} alt="" />
            </a>
          }
        </Container>
      </LogoContainer>
    </StyledPortfolio>
  );
}

export default Portfolio;
