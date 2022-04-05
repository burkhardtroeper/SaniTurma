import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";

import DiseasesContext from "../store/diseases-context";
import UserContext from '../store/user-context';
import HealthTeamContext from "../store/healthteam-context";


let confirmMessage = '';

const Welcome = () => {
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const diseaseCtx = useContext(DiseasesContext); 
  const userCtx = useContext(UserContext);
  const healthTeamCtx = useContext(HealthTeamContext);

  const history = useHistory();

  const diseaseClicked = (value) => {
    
    userCtx.selectDisease(value);    
    const disease = diseaseCtx[userCtx.diseaseSelected].name
    healthTeamCtx.getTeamByDisease(disease);

    confirmMessage = (
      <Row>
        <Col>
          <p>{diseaseCtx[value].confirmMessage}</p>
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
            {diseaseCtx.map((disease, index) => {
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
