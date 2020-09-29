import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Palestra from './Palestra';

import api from '../../services/api'

function Palestras() {
  const [programacoes, setProgramacoes] = useState([]);

  useEffect(() => {
    api.get('/').then(response => {
      setProgramacoes(response.data.acf.acf_cw2021__schedule_repeater)
      console.log('Response =>', response.data.acf.acf_cw2021__schedule_repeater)
    })
    // console.log('Result', result.data.acf.acf_cw2021__schedule_repeater)
  }, []);


  return (
    <GradeContent>
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
    </GradeContent>
  );
}

export default Palestras;

const GradeContent = styled.section`
  overflow-y: auto;
  height: calc(100vh - 410px);
`;

const GradeList = styled.ul`
  margin: 0;
  padding: 0 20px 0 0;
  list-style: none;
`;
