import React from "react";
import {
  StyledHeader,
  TextContainer,
  ImageContainer,
} from "../styles/headerStyle";
import { Container, Button } from "react-bootstrap";
import mainheader from "../../assets/Images/mainheader.png";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <TextContainer>
          <h1>Cabin of Code</h1>
          <p>We make great websites</p>
          <Button>
            <a href="#contact">SAY HI</a>
          </Button>
        </TextContainer>
        <ImageContainer>
          <img src={mainheader} className="img-fluid" alt="Responsive Rabbit" />
        </ImageContainer>
      </Container>
    </StyledHeader>
  );
}

export default Header;
