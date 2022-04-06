import React from "react";
import { Container } from "react-bootstrap";
import { StyledContact, TextWrapper } from "../styles/contactStyle";

function Contact() {
  return (
    <StyledContact id="contact">
      <Container>
        <TextWrapper>
          <h2>Let's build something great together</h2>
          <p>
            We're a Wordpress web agency based in Stockholm, Sweden. Our passion
            is to develop beautiful websites specially designed for your target
            audiences. Sounds good? Send us an email.
          </p>
          <h3>contact@cabinofcode.com</h3>
        </TextWrapper>
      </Container>
    </StyledContact>
  );
}

export default Contact;
