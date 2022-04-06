import React from "react";
import { StyledFaq, FaqContainer } from "../styles/faqStyle";
import { Accordion, Container } from "react-bootstrap";

function Faq() {
  return (
    <StyledFaq>
      <FaqContainer>
        <h2>Frequently Asked Questions</h2>
        <Container>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                1. What technologies do you use?
              </Accordion.Header>
              <Accordion.Body>
                We use react JS along with different libraries to make best of
                design.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>2. How much do you charge?</Accordion.Header>
              <Accordion.Body>
                We charge depending upon your design and requirements. There is
                no fix rate.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                3. Do you guarantee money refund?
              </Accordion.Header>
              <Accordion.Body>
                We want to satisfy our customer no matter what. We offer
                unlimited revisions too. Even then if you are not satisfied with
                out work, we'll offer refund.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </FaqContainer>
    </StyledFaq>
  );
}

export default Faq;
