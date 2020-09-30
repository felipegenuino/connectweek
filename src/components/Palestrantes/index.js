
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { Spinner } from 'reactstrap';

import api from '../../services/api'


import img1 from './image/robson_carlos_santos.jpg'; //ROBSON CARLOS SANTOS
import img2 from './image/rogerio_suzuki.png'; //ROGÉRIO SUZUKI
import img3 from './image/eliomar_cachoeira.png'; //ELIOMAR CACHOEIRA
import img4 from './image/sergio_gnipper.png'; //SÉRGIO GNIPPER
import img5 from './image/hilton_moreno.png'; //HILTON MORENO
import img6 from './image/general_giuseppe.png'; //GENERAL GIUSEPPE HENRIQUES
import img7 from './image/jano.png'; //JANO D’ARAUJO
import img8 from './image/edvanio_teixeira.png'; //EDVANIO TEIXEIRA
import img9 from './image/caroline_correa.png'; //CAROLINE CORREA
import img10 from './image/rui_goncalves.png'; //RUI GONÇALVES
import img11 from './image/micheli_mohr.png'; //MICHELI MOHR
import img12 from './image/francisco_de_assis_araujo.png'; //FRANCISCO GONÇALVES
import img13 from './image/rodrigo_koerich.png'; //RODRIGO KOERICH


function Palestrantes() {

  // const [loading, setLoading] = useState(true)
  // const [palestrantes, setPalestrantes] = useState([]);


  // useEffect(() => {
  //   api.get('/').then(response => {

  //     let palestrantes = response.data.acf.acf_cw2021__schedule_repeater.filter((x) => {
  //       return x.acf_cw2021__schedule_palestrante.acf_cw2021__schedule_palestrante.length >= 0;
  //     })

  //     setPalestrantes(response.data.acf.acf_cw2021__schedule_repeater)
  //     console.log('Response =>', palestrantes)
  //     setLoading(false)
  //   })
  // }, []);


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
                    <h3 className="cardTitle">ROBSON CARLOS SANTOS</h3>
                  </div>
                </li>

                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img2})` }}
                    ></div>
                    <h3 className="cardTitle">ROGÉRIO SUZUKI</h3>
                  </div>
                </li>

                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img3})` }}
                    ></div>
                    <h3 className="cardTitle">ELIOMAR CACHOEIRA</h3>
                  </div>
                </li>

                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img4})` }}
                    ></div>
                    <h3 className="cardTitle">SÉRGIO GNIPPER</h3>
                  </div>
                </li>

                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img5})` }}
                    ></div>
                    <h3 className="cardTitle">HILTON MORENO</h3>
                  </div>
                </li>

                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img6})` }}
                    ></div>
                    <h3 className="cardTitle">GENERAL GIUSEPPE HENRIQUES</h3>
                  </div>
                </li>

                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img7})` }}
                    ></div>
                    <h3 className="cardTitle">JANO D’ARAUJO</h3>
                  </div>
                </li>

                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img8})` }}
                    ></div>
                    <h3 className="cardTitle">EDVANIO TEIXEIRA</h3>
                  </div>
                </li>

                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img9})` }}
                    ></div>
                    <h3 className="cardTitle">CAROLINE CORREA</h3>
                  </div>
                </li>

                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img10})` }}
                    ></div>
                    <h3 className="cardTitle">RUI GONÇALVES</h3>
                  </div>
                </li>

                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img11})` }}
                    ></div>
                    <h3 className="cardTitle">MICHELI MOHR</h3>
                  </div>
                </li>

                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img12})` }}
                    ></div>
                    <h3 className="cardTitle">FRANCISCO GONÇALVES</h3>
                  </div>
                </li>

                <li>
                  <div className="cardPalestrante">
                    <div
                      className="cardImage"
                      style={{ backgroundImage: ` url(${img13})` }}
                    ></div>
                    <h3 className="cardTitle">RODRIGO KOERICH</h3>
                  </div>
                </li>

              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </PalestrantesCP>
  )
}

export default Palestrantes;





const PalestrantesCP = styled.section`
.palestrantes {
  background-color: var(--bg-content);
  overflow-x: auto;
}
ul {
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  // justify-content: center;
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
  margin-top: 10px;
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
