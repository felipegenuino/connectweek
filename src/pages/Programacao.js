import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Palastras from '../components/Palestras';

function Programacao() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="header-page">
            <h2>Programação</h2>
            <h3>
              Confira a agenda completa, com a descrição das palestras e
              palestrantes.
            </h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Palastras />
        </Col>
      </Row>
    </Container>
  );
}

export default Programacao;
