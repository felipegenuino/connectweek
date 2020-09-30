import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Palestra from './Palestra';
import { Spinner } from 'reactstrap';


import api from '../../services/api'

function Palestras() {
  const [loading, setLoading] = useState(true)
  const [programacoes, setProgramacoes] = useState([]);


  // useEffect(() => {
  //   async function setProgramacoes() {
  //     try {
  //       const { data } = await api.get("/");
  //       setProgramacoes(data.acf.acf_cw2021__schedule_repeater);
  //     } catch (error) {
  //       alert("Ocorreu um erro ao buscar os items");
  //     }
  //   }
  //   setProgramacoes();
  // }, []);


  useEffect(() => {
    api.get('/').then(response => {
      setProgramacoes(response.data.acf.acf_cw2021__schedule_repeater)
      console.log('Response =>', response.data.acf.acf_cw2021__schedule_repeater)
      setLoading(false)
    })
    // console.log('Result', result.data.acf.acf_cw2021__schedule_repeater )
  }, []);


  return (
    <GradeContent>

      {loading &&
        <div className="loadingContainer">
          <Spinner size="lg" color="light" />
        </div>
      }
      {!loading &&
        <GradeList aria-label="programação">
          {programacoes.map(
            programacao =>
              <Palestra
                key={programacao.acf_cw2021__schedule_repeater_title}
                title={programacao.acf_cw2021__schedule_repeater_title}
                subtitle={programacao.acf_cw2021__schedule_repeater_subtitle}
                diaMes={programacao.acf_cw2021__schedule_data}
                hora={programacao.acf_cw2021__schedule_hora}
                palestrantes={programacao.acf_cw2021__schedule_palestrante}
                content={programacao.acf_cw2021__schedule_repeater_content}
                agora={programacao.acf_cw2021__schedule_repeater_now}
                step={programacao.acf_cw2021__schedule_repeater_step}
                diaDaSemana={programacao.acf_cw2021__schedule_semana}
                sorteio={programacao.acf_cw2021__schedule_sorteio}
              />
          )}
        </GradeList>
      }
    </GradeContent>
  );
}

export default Palestras;

const GradeContent = styled.section`
  overflow-y: auto;
  height: calc(100vh - 410px);

  .loadingContainer{
    width: 100%;
    justify-content: center;
    display: flex;
    min-height: 50vh;
    align-items: center;
  }
`;

const GradeList = styled.ul`
  margin: 0;
  padding: 0 20px 0 0;
  list-style: none;
`;
