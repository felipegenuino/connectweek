import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import brand from "../HeroBlock/logotipo.svg";
import styled from 'styled-components';


function HeroBlock() {
  return (
    <HeroBlockContainer>
      <Container>
        <Row>
          <Col>
            <div className="HeroBlockHeader">
              <h1>  <img src={brand} /> </h1>
              <h2>Para um novo mundo, construções mais conectadas </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </HeroBlockContainer>
  )
}

export default HeroBlock



const HeroBlockContainer = styled.section`
.HeroBlockHeader {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;
    background: var(--bg-content);
    color: #fff;

    h2{
        font-style: italic;
        font-weight: 300;
        font-size: 24px;
        letter-spacing: 4px;
        margin-top: 30px;
    }
  }
  `
