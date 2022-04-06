import styled from "styled-components";

export const StyledTopbar = styled.nav`
  .navbar {
    background-color: rgb(255, 251, 240) !important;
    min-height: 10vh;
  }

  .container {
    display: flex;
    justify-content: flex-end;

    @media (max-width: 991.98px) {
      justify-content: center;
    }
  }
  .nav-link {
    color: black !important;
    font-size: 18px;
    padding-left: 20px !important;

    :hover {
      border-bottom: 2px solid black;
    }
  }
`;
