import { useEffect, useState, useContext, useRef } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Toast, Button } from "react-bootstrap";

import HealthTeamContext from "../store/healthteam-context";
import UserContext from "../store/user-context";
import DiseasesContext from "../store/diseases-context";

const MapPage = () => {
  const diseaseCtx = useContext(DiseasesContext);
  const userCtx = useContext(UserContext);
  const healthTeamCtx = useContext(HealthTeamContext);

  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    //setShowToast(!showToast);

    const disease = diseaseCtx[userCtx.diseaseSelected].name
    healthTeamCtx.getTeamByDisease(disease);
    // console.log(updatedHealthTeam);

    //setHealthTeam(healthTeamCtx.getTeamByDisease(disease));
    //console.log(healthTeam);
  };

  //setDisease(diseaseCtx[userCtx.diseaseSelected]);

  //   useEffect(() => {
  //     console.log("Selected Disease in MapPage: " + disease);
  //     console.log("HealthTeam: " + healthTeam);
  //   }, [disease, healthTeam]);

  const memberPopup = (
    <div>
      {healthTeamCtx.healthWorkers.map((teamMember) => (
        <Marker key={teamMember.id} position={[teamMember.lat, teamMember.lng]}>
          <Popup>
            {teamMember.name}
            <br />
            {teamMember.specialist}
          </Popup>
        </Marker>
      ))}
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
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>

      <Button className="mb-2 map-page-menu-button" onClick={toggleToast}>
        Menu
      </Button>
    </div>
  );
};

export default MapPage;
