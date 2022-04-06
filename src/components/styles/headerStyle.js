import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: rgb(255, 251, 240);
  min-height: 100vh;

  @media (max-width: 575.98px) {
    min-height: 60vh;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767.98px) {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

export const TextContainer = styled.div`
  h1 {
    font-size: 65px;
    font-weight: 800;
    letter-spacing: 1px;
    @media (max-width: 991.98px) {
      font-size: 40px;
    }

    @media (max-width: 767.98px) {
      padding-top: 40px;
      font-size: 50px;
      text-align: center;
    }
    @media (max-width: 575.98px) {
      font-size: 30px;
      text-align: center;
    }
  }
  p {
    font-size: 30px;
    @media (max-width: 991.98px) {
      font-size: 27px;
    }
    @media (max-width: 767.98px) {
      padding-top: 20px;
      font-size: 32px;
    }
    @media (max-width: 575.98px) {
      font-size: 17px;
      text-align: center;
    }
  }

  Button {
    background-color: rgb(255, 227, 129);
    color: black;
    font-size: 20px;
    font-weight: 500;
    width: 105px;
    border: none;
    margin-top: 5px;

    @media (max-width: 767.98px) {
      display: none;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }
  button: hover {
    background-color: rgb(255, 201, 17);
    border: none;
    color: black;
    font-size: 20px;
    font-weight: 500;
    width: 110px;
    transition-duration: 0.4s;
  }
`;
export const ImageContainer = styled.div`
  img {
    @media (max-width: 1199.98px) {
      height: 400px;
      width: 400px;
    }

    @media (max-width: 767.98px) {
      height: 300px;
      width: 300px;
    }
    @media (max-width: 575.98px) {
      height: 250px;
      width: 250px;
      min-width: 100%;
      background-size: contain;
    }
  }
`;
