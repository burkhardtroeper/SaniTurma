import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";

import DiseasesContext from "../store/diseases-context";
import UserContext from '../store/user-context';


let confirmMessage = '';

const Welcome = () => {
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const diseases = useContext(DiseasesContext); 
  const userCtx = useContext(UserContext);

  const history = useHistory();

  const diseaseClicked = (value) => {
    userCtx.selectDisease(value);
    confirmMessage = (
      <Row>
        <Col>
          <p>{diseases[value].confirmMessage}</p>
        </Col>
      </Row>
    );

    console.log('Disease selected');
    setShowConfirmMessage(true);
  };

  const weiterButtonClicked = () => {
    history.push('/team-intro');
  }

  return (
    <div className="content">
      <Container>
        <Row>
          <Col>
            <h1>Willkommen beim SaniTurma</h1>
          </Col>
        </Row>
        <Row>
          <p>
            Für welche Krankheit wollen Sie ein Gesundheits-Team
            zusammenstellen?
          </p>
          <ListGroup>
            {diseases.map((disease, index) => {
              return (
                <ListGroup.Item
                  disabled={disease.disabled}
                  key={disease.key}
                  variant="primary"
                  action
                  onClick={() => diseaseClicked(index)}
                >
                  {disease.name}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Row>
        <br></br>
        {showConfirmMessage ? confirmMessage: <p></p>}
        <Row>
          <Button onClick={() => weiterButtonClicked()} disabled={!showConfirmMessage}>Weiter</Button>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
