import { useContext } from "react";

import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import DiseasesContext from "../store/diseases-context";

const Welcome = () => {
  
  const diseases = useContext(DiseasesContext);
  
  const diseaseClicked = (value) => {
    console.dir(value);
  };

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
        <Row>
          <Button>Weiter</Button>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
