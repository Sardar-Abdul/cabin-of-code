import styled from "styled-components";

export const StyledFaq = styled.div`
  min-height: 60vh;
  background-color: rgb(173, 223, 207);
`;

export const FaqContainer = styled.div`
  height: 50vh;
  display: flex !important;
  flex-direction: column;
  align-items: center !important;
  justify-content: space-around !important;

  .accordion-body {
    background-color: rgb(173, 223, 207) !important;
    font-size: 16px;
    font-weight: 500;
  }
  h2 {
    background-color: rgb(173, 223, 207) !important;
  }
  .accordion-button {
    color: black !important;
    border: none !important;
    font-size: 18px;
    font-weight: 500;
    border-bottom: none !important;
  }
  .accordion-button.collapsed {
    background-color: rgb(173, 223, 207) !important;
  }
  .accordion-button:focus {
    box-shadow: none !important;
  }
  .accordion-button:not(.collapsed) {
    background-color: rgb(173, 223, 207) !important;
  }
  .accordion-button::after {
    color: black !important;
  }
`;
