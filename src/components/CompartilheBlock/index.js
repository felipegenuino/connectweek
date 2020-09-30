import React from "react";
import { FacebookProvider, Comments } from "react-facebook";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";


function CompartilheBlock() {
  return (
    <Compartilhe>
      <Container>
        <Row>
          <Col>
            <div className="header-page">
              <h2>Compartilhe o que está achando do evento</h2>
              <p>Deixe seu comentário, ou sugestão sobre o Connect week</p>
            </div>
            <div className="ShareCPContent">
              <div className="ShareCPContentFacebook">
                <FacebookProvider appId="700464053421545">
                  <Comments href="http://www.facebook.com" />
                </FacebookProvider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Compartilhe>
  )
}

export default CompartilheBlock



const Compartilhe = styled.section`
  .ShareCPContent {
    display: flex;
    flex-direction: column;
    background: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 0 auto 30px auto;
    padding: 20px;
    width: 970px;
    max-width: 100%;
  }
  .ShareCPContentFacebook {
    border: 1px solid #cacaac;
    width: 650px;
    max-width: 100%;
  }
`;
