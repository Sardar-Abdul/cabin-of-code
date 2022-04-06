import React from "react";
import { StyledFooter } from "../styles/footerStyle";
import balloon from "../../assets/Images/balloon.png";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <StyledFooter>
      <footer>
        <Container>
          <img src={balloon} className="img-fluid" alt="Responsive balloon" />
        </Container>
        <p>&copy; Copyright 2022 All Rights Reserved</p>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
