import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function Palestra({ title, subtitle, diaMes, hora, palestrantes, content, agora, step, diaDaSemana, sorteio }) {



  const classNameModal = 'modalGrade';

  console.log('palestrantes', palestrantes)

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);



  return (
    <GradeItemContainer>
      <div className="GradeItemDate">
        <div>
          <span className="GradeIteimport" >
            {diaMes}
          </span>
          <span className="GradeItemDatedia">{diaDaSemana} </span>
        </div>
      </div>
      <div className="GradeItemCard">
        <div className="GradeItemCardData">
          <span>{hora} </span>
        </div>
        <div className="GradeItemCardContent">
          <div className="GradeItemCardContentInfo">
            <h4 className="GradeItemCardContentInfoTitle">
              <span className="GradeItemCardContentInfoTitleStep">
                {step}:
              </span>
              <span className="GradeItemCardContentInfoTitleText">
                {title}
              </span>
            </h4>

            {palestrantes && palestrantes.map(x =>
              <div className="GradeItemCardContentInfoSpeaker">
                <strong className="GradeItemCardContentInfoSpeakerName">
                  {x.acf_cw2021__schedule_palestrante__name}
                </strong>
                <span className="GradeItemCardContentInfoSpeakerPosition">
                  {x.acf_cw2021__schedule_palestrante__position}
                </span>
              </div>
            )}
            <hr />

          </div>
          <div className="GradeItemCardContentCall">
            <button href="#" onClick={toggle} className="GradeItemCardContentCallToAction">
              Saiba mais </button>
          </div>
        </div>
      </div>


      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={classNameModal} size="lg">

        <div class="modal-header-top">
          <span class="modal-header-top__data">{diaMes}</span>
          <span class="modal-header-top__hora">{hora}</span>
        </div>
        <ModalHeader toggle={toggle}>
          <strong>{step}: </strong> {title}
        </ModalHeader>
        <ModalBody>
          <h5>O que você vai ver?</h5>
          <div className="modal-data-content" dangerouslySetInnerHTML={{ __html: content.replace(/(<? *script)/gi, 'illegalscript') }}></div>

          <hr className="modal-separador" />
          <div className="modal-lista-palestrantes" >
            <ul aria-label="palestrantes">

              {palestrantes && palestrantes.map(x =>
                <li>
                  <div className="palestrante-mini-card">
                    <div className="palestrante-mini-card-d">
                      <img src={x.acf_cw2021__schedule_palestrante__image.url} alt={x.acf_cw2021__schedule_palestrante__image.alt} />
                    </div>
                    <div className="palestrante-mini-card-e">
                      <h5>  {x.acf_cw2021__schedule_palestrante__name} </h5>
                      <p> {x.acf_cw2021__schedule_palestrante__description}  </p>
                    </div>
                  </div>

                </li>

              )}


            </ul>
          </div>

        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter> */}
      </Modal >


    </GradeItemContainer >
  )
}

export default Palestra;




const GradeItemContainer = styled.li`
  display: flex;
  min-height: 140px;
  margin-bottom: 20px;
  border: 2px solid transparent;
  transition: all 0.2s linear;
  color: #fff;

  &:hover,
  &:focus-within {
    border: 2px solid #2dad71;
  }


  .GradeItemDate {
    background-color: #2dad71;
    color: #fff;
    width: 170px;
    max-width: 170px;
    min-width: 170px;

    > div {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .GradeItemDateNumber {
        font-size: 24px;
      }
      .GradeItemDatedia {
        font-size: 18px;
        text-transform: uppercase;
      }
    }
  }
  .GradeItemCard {
    background-color: #34393b;
    margin-left: 20px;
    border: 1px solid #585858;
    display: flex;
    padding: 18px 24px;
    width: 100%;

    .GradeItemCardData {
      border: 1px solid #24dc86;
      width: 100px;
      min-width: 100px;
      margin-right: 18px;
      justify-content: center;
      display: flex;
      align-items: center;
      font-size: 24px;
      color: #24dc86;
      text-transform: uppercase;
    }
    .GradeItemCardContent {
      display: flex;
      justify-content: flex-start;
      width: 100%;
    }
    .GradeItemCardContentInfo {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;


      .GradeItemCardContentInfoTitle {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 10px;
        margin-top: 5px;
        .GradeItemCardContentInfoTitleStep {
          font-weight: 600;
          margin-right: 10px;
        }
        .GradeItemCardContentInfoTitleText {
          font-weight: 400;
        }
      }
      .GradeItemCardContentInfoSpeaker {
        font-size: 16px;
        .GradeItemCardContentInfoSpeakerName {
          color: #24dc86;
          margin-right: 30px;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            height: 20px;
            width: 1px;
            background: #fff;
            top: 2px;
            right: -15px;
          }
        }
        .GradeItemCardContentInfoSpeakerPosition {
          font-weight: 300;
          letter-spacing: 0.03rem;
        }
      }
    }
    .GradeItemCardContentCall {
      width: 200px;
      min-width: 200px;
      justify-content: center;
      display: flex;
      align-items: center;
      height: 100%;
      .GradeItemCardContentCallToAction {
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
        text-transform: uppercase;
        width: 165px;
        align-items: center;
        display: flex;
        justify-content: center;
        height: 65px;
        transition: all 0.2s linear;
        &:focus,
        &:hover {
          border: 1px solid #fff;
          background-color: rgba(255, 255, 255, 0.2);
          text-decoration: none;
        }
      }
    }
  }
`;
