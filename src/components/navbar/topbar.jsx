import React from "react";
import { StyledTopbar } from "../styles/topbarStyle";
import { Container, Nav, Navbar } from "react-bootstrap";

function Topbar() {
  return (
    <StyledTopbar>
      <>
        <Navbar>
          <Container>
            <Nav>
              <Nav.Link href="#about">what we do</Nav.Link>
              <Nav.Link href="#contact">who we are</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </StyledTopbar>
  );
}

export default Topbar;
