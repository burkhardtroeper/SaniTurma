import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";
import DiseasesContext from "../store/diseases-context";
import UserContext from "../store/user-context";

import SpecialistCard from "../components/SpecialistCard";

const TeamIntro = () => {
  const diseases = useContext(DiseasesContext);
  const user = useContext(UserContext);

  const history = useHistory();

  const weiterButtonClicked = () => {
    history.push("/karte");
  };

  const disease = String(diseases[user.diseaseSelected].name);
  const diseaseSpecialists = diseases[user.diseaseSelected].healthTeam;

  return (
    <div className="content">
      <Container>
        <Row>
          <Col>
            <h1>Ihr Team {disease}</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <ul>
              {diseaseSpecialists.map((diseaseSpecialist) => (
                <SpecialistCard
                  key={diseaseSpecialist.id}
                  name={diseaseSpecialist.name}
                  description={diseaseSpecialist.description}
                ></SpecialistCard>
              ))}
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button onClick={() => weiterButtonClicked()}>Weiter</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamIntro;
