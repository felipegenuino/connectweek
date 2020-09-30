import React from 'react'
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

import image from "../AboutBlock/image.png";


import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

function AboutBlock() {
  return (
    <AboutCP>
      <Container>
        <Row>
          <Col lg="6">
            <img className="AboutBlockImage" src={image} />
          </Col>
          <Col lg="6">
            <div className="AboutCPContent">
              <h2> O que é a <br /> Connect Week?</h2>
              <p> A connect week é um evento 100% online, gratuito e interativo para você descobrir mais sobre soluções para projetos de engenharia, instalações prediais e tendências para a construção civil. Uma semana intensiva, com profissionais de renome no mercado. </p>
            </div>
          </Col>

          <Col lg="12">
            <div className="AboutCPFooter">
              <span>COMPARTILHE O QUE ESTÁ ACHANDO DO EVENTO</span>
              <span><KeyboardArrowDown /></span>
            </div>
          </Col>

        </Row>
      </Container>

    </AboutCP>
  )
}

export default AboutBlock




const AboutCP = styled.section`
  height: 800px;
  min-height: 90vh;
  display: flex;

  .container {
    align-items: center;
    align-content: center;
    display: flex;
    > .row {
      align-items: center;
    }
  }
  .AboutCPContent {
    display: flex;
    flex-direction: column;
    color: #fff;
    h2 {
      font-size: 48px;
      font-weight: 700;
    }
  }

  .AboutCPFooter{
    text-align: center;
    color: #fff;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    flex-direction: column;
   > span{display: flex; justify-content: center;}
  }

  .AboutBlockImage{
    width: 100%;
  }
`;
