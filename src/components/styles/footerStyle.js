import styled from "styled-components";

export const StyledFooter = styled.div`
  min-height: 40vh;
  background-color: rgb(255, 201, 17);
  margin-bottom: -20px;

  @media (max-width: 991.98px) {
    min-height: 10vh;
  }

  .container {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
      @media (max-width: 991.98px) {
        display: none;
      }
    }
  }
  P {
    text-align: center;
    padding-bottom: 10px;

    @media (max-width: 991.98px) {
      text-align: center;
      padding-top: 12px;
      font-size: 18px;
      font-weight: 300;
    }
  }
`;
