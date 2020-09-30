import React from 'react';
import { Container, Row, Col } from 'reactstrap';



function Assista() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="header-page">
            <h2> Assista ao vivo</h2>
          </div>
          <div className="list-days">
            <ul>
              <li className="active">
                <div>
                  <span>DIA 6</span>
                  <small>Terça</small>
                </div>
              </li>
              <li>
                <div>
                  <span>DIA 7</span>
                  <small>Quarta</small>
                </div>
              </li>
              <li>
                <div>
                  <span>DIA 8</span>
                  <small>Quinta</small>
                </div>
              </li>
              <li>
                <div>
                  <span>DIA 9</span>
                  <small>Sexta</small>
                </div>
              </li>
            </ul>
          </div>



          {/* <div className="list-videos">
            <ul>
              <li >
                <div>
                  <span>DIA 6</span>
                  <small>Terça</small>
                </div>
              </li>
              <li>
                <div>
                  <span>DIA 7</span>
                  <small>Quarta</small>
                </div>
              </li>
              <li>
                <div>
                  <span>DIA 8</span>
                  <small>Quinta</small>
                </div>
              </li>
            </ul>
          </div> */}


        </Col>
      </Row>
    </Container>
  );
}

export default Assista;
