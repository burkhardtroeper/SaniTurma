import { useEffect, useState, useContext } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Toast, Button } from "react-bootstrap";

import HealthTeamContext from "../store/healthteam-context";
import UserContext from "../store/user-context";
import DiseasesContext from "../store/diseases-context";

let disease = "";
let teamTypes = [];

const MapPage = () => {
  const diseaseCtx = useContext(DiseasesContext);
  const userCtx = useContext(UserContext);
  const healthTeamCtx = useContext(HealthTeamContext);

  const [showToast, setShowToast] = useState(false);

  const [healthTeam, setHealthTeam] = useState(healthTeamCtx.healthWorkers);

  const toggleToast = () => {
    setShowToast(!showToast);
  };

  useEffect(() => {
    disease = diseaseCtx[userCtx.diseaseSelected].name;
    healthTeamCtx.getTeamByDisease(disease);
    healthTeamCtx.getTeamTypes(disease);
    setHealthTeam(healthTeamCtx.healthWorkers);

    console.log("Selected Disease in MapPage: " + disease);
    console.log("HealthTeam: " + healthTeam);
    console.log("TeamTypes: " + teamTypes);
  }, []);

  const addTeamMember = (id) => {

    console.log(userCtx.team);
    console.log('Add Teammember with id ... ' + id);
    userCtx.addTeamMember(id);
    console.log(userCtx.team);
    healthTeamCtx.getTeamByDisease(disease);
    setHealthTeam(healthTeamCtx.healthWorkers);

  };

  const deleteTeamMember = (id) => {
    console.log(userCtx.team);
    userCtx.removeTeamMember(id);
    console.log(userCtx.team);
    healthTeamCtx.getTeamByDisease(disease);
    setHealthTeam(healthTeamCtx.healthWorkers);
  }


  const memberPopup = (
    <div>
      {healthTeam.map((teamMember) => (       

        <Marker key={teamMember.id} position={[teamMember.lat, teamMember.lng]}>
          <Popup>
            {teamMember.name}
            <br />
            {teamMember.specialist}
            <br />
            <Button disabled={teamMember.selected} onClick={() => addTeamMember(teamMember.id)}>Auswählen</Button>
            <Button disabled={!teamMember.selected} onClick={() => deleteTeamMember(teamMember.id)}>Löschen</Button>
          </Popup>
        </Marker>
      ))}
    </div>
  );

  const specialistButtonClicked = (selectedTeamType) => {

    if (selectedTeamType === null) {
      setHealthTeam(healthTeamCtx.healthWorkers);
    } else {
      const updatedHealthTeam = healthTeamCtx.healthWorkers.filter((healthworker) => {
        return healthworker.specialist === selectedTeamType;  
      });  
      setHealthTeam(updatedHealthTeam);
    }

  };

  const teamTypesList = (
    <div>
      {healthTeamCtx.teamTypes.map((teamType, index) => (
        <div key={teamType}>
        <Button onClick={() => specialistButtonClicked(teamType)}>
          {teamType}
        </Button>
        <br/>
        </div>
      ))}
      <Button onClick={() => specialistButtonClicked(null)}>
          Reset
        </Button>
    </div>
  );

  return (
    <div>
      <MapContainer center={[50.680108, 10.387152]} zoom={7}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {memberPopup}
      </MapContainer>

      <Toast
        show={showToast}
        className="map-page-toast"
        position="bottom-center"
        onClose={toggleToast}
      >
        <Toast.Header>
          <strong className="me-auto">Menu</strong>
        </Toast.Header>
        <Toast.Body>
          {healthTeamCtx.teamTypes.length !== 0 ? (
            teamTypesList
          ) : (
            <p>No Team Types</p>
          )}
        </Toast.Body>
      </Toast>

      <Button className="mb-2 map-page-menu-button" onClick={toggleToast}>
        Menu
      </Button>
    </div>
  );
};

export default MapPage;
