import styled from "styled-components";

export const StyledAbout = styled.div`
  min-height: 58vh;

  @media (max-width: 1199.98px) {
    min-height: 90vh;
  }
`;

export const ItemContainer = styled.div`
  height: 58vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 991.98px) {
    height: inherit;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
export const CustomDesign = styled.div`
  height: inherit;
  width: 100%;
  background-color: rgb(173, 223, 207);
  @media (max-width: 1199.98px) {
    min-height: 80vh;
    @media (max-width: 575.98px) {
      min-height: 48vh;
    }
  }
`;
export const EasyInterface = styled.div`
  height: inherit;
  width: 100%;
  background-color: rgb(255, 248, 222);
  @media (max-width: 1199.98px) {
    min-height: 80vh;
  }
  @media (max-width: 575.98px) {
    min-height: 48vh;
  }
`;
export const Performance = styled.div`
  height: inherit;
  width: 100%;
  background-color: rgb(255, 201, 17);
  @media (max-width: 1199.98px) {
    min-height: 80vh;
  }
  @media (max-width: 575.98px) {
    min-height: 48vh;
  }
`;

export const CustomContainer = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    padding-top: 10px;
    font-size: 20px;
    font-weight: 500;
  }
  p {
    padding-top: 20px;
    width: 60%;
    text-align: justify;
    text-align-last: center;
    font-weight: 500;
  }
`;

export const InterfaceContainer = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    padding-top: 10px;
    font-size: 20px;
    font-weight: 500;
  }
  p {
    padding-top: 20px;
    width: 60%;
    text-align: justify;
    text-align-last: center;
    font-weight: 500;
  }
`;

export const PerformanceContainer = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    padding-top: 10px;
    font-size: 20px;
    font-weight: 500;
  }
  p {
    padding-top: 20px;
    width: 60%;
    text-align: justify;
    text-align-last: center;
    font-weight: 500;
  }
`;
