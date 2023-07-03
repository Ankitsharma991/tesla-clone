import React from "react";
import styled from "styled-components";
// import MenuIcon from "@material-ui/icons/menu";

function Header() {
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <p>
          <a href="#m">Model S</a>
        </p>
        <p>
          <a href="#m">Model 3</a>
        </p>
        <p>
          <a href="#m">Model X</a>
        </p>
        <p>
          <a href="#m">Model Y</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="#a">Shop</a>
        <a href="#a">Tesla Account</a>
      </RightMenu>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    /* padding: 0 10px; */
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

export default Header;
