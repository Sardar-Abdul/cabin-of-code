import styled from "styled-components";
import contactUs from "../../assets/Images/contactUs.png";

export const StyledContact = styled.div`
  min-height: 70vh;
  background-image: url(${contactUs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 767.98px) {
    min-height: 100vh;
    padding-top: 50px;
  }
  @media (max-width: 575.98px) {
    min-height: 60vh;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 30px;
    @media (max-width: 991.98px) {
      font-size: 25px;
    }
    @media (max-width: 575.98px) {
      font-size: 20px;
    }
  }

  p {
    width: 65%;
    text-align: justify;
    text-align-last: center;
    padding: 20px;
    font-size: 18px;
    font-weight: 100;
    letter-spacing: 0.5px;

    @media (max-width: 767.98px) {
      width: 100%;
    }
  }

  h3 {
    font-size: 28px;
    @media (max-width: 575.98px) {
      font-size: 20px;
    }
    :hover {
      border-bottom: 2px solid black;
    }
  }
`;
