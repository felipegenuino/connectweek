import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import styled from "styled-components";

function Navigation() {
  return (
    <NavigationContainer>
      <Container>
        <Row>
          <Col>
            <nav>
              <ul className="NavigationList">
                <li>
                  <NavLink end={true} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/programacao">Programação</NavLink>
                </li>
                <li>
                  <NavLink to="/assista-ao-video">Assista ao vivo</NavLink>
                </li>
                <li>
                  <NavLink to="/versoes-2021">versoes-2021</NavLink>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </NavigationContainer>
  );
}

export default Navigation;

const NavigationContainer = styled.header`
  nav {
    width: 100%;
    margin-top: 50px;
  }
  .NavigationList {
    list-style: none;
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    grid-template-columns: repeat(4, 1fr);
    border-bottom: 1px solid #636667;
    list-style: none;
    /* display: flex; */
    justify-content: center;
    li {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      &:last-child a {
        margin-right: 0;
      }
      a {
        margin-right: 30px;
      }
    }
    a {
      color: #fff;
      background-color: rgba(52, 57, 59, 0.8);
      width: 100%;
      margin: 0 auto;
      text-align: center;
      padding: 10px 0;
      border: 1px solid transparent;

      &.active {
        border-color: #636667;
        border-bottom-color: transparent;
      }
      &.is-active {
        border-color: #4e5253;
        border-bottom-color: transparent;
      }
    }
  }
`;
