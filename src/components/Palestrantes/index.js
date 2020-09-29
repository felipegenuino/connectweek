import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import img1 from './image/robson_carlos_santos.jpg';
import img2 from './image/robson_carlos_santos.jpg';
import img3 from './image/robson_carlos_santos.jpg';
import img4 from './image/robson_carlos_santos.jpg';
import img5 from './image/robson_carlos_santos.jpg';
import img6 from './image/robson_carlos_santos.jpg';

function Palestrantes() {
  return (
    <PalestrantesCP>
      <Container>
        <Row>
          <Col>
            <div className="palestrantes">
              <ul>
                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img1})` }}
                    ></div>
                    <h3 className="cardTitle">Engº Nome Fulano de Tal</h3>
                  </div>
                </li>
                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img2})` }}
                    ></div>
                    <h3 className="cardTitle">Engº Nome Fulano de Tal</h3>
                  </div>
                </li>
                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img3})` }}
                    ></div>
                    <h3 className="cardTitle">Engº Nome Fulano de Tal</h3>
                  </div>
                </li>
                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img4})` }}
                    ></div>
                    <h3 className="cardTitle">Engº Nome Fulano de Tal</h3>
                  </div>
                </li>
                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img5})` }}
                    ></div>
                    <h3 className="cardTitle">Engº Nome Fulano de Tal</h3>
                  </div>
                </li>
                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img6})` }}
                    ></div>
                    <h3 className="cardTitle">Engº Nome Fulano de Tal</h3>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </PalestrantesCP>
  );
}

export default Palestrantes;

const PalestrantesCP = styled.section`
  .palestrantes {
    background-color: var(--bg-content);
  }
  ul {
    list-style: none;
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    padding: 0;
    margin: 0;
  }

  .cardPalestrante {
    text-align: center;
    overflow: hidden;
  }
  .cardTitle {
    font-size: 14px;
    color: #fff;
    font-weight: 400;
  }
  .cardImage {
    width: 206px;
    height: 275px;
    background-color: #24dc86;
    background-blend-mode: multiply;
    background-size: cover;
    transition: all 0.2s linear;
    &:hover {
      background-color: #fff;
    }
  }
`;
