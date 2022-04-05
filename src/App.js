import "bootstrap/dist/css/bootstrap.min.css";
import DiseasesProvider from "./store/DiseasesProvider";

import PageHeader from "./components/PageHeader";

import "./App.css";
import UserProvider from "./store/UserProvider";
import HealthTeamProvider from "./store/HealthTeamProvider";

function App() {
  return (
    <HealthTeamProvider>
      <DiseasesProvider>
        <UserProvider>
          <div>
            <PageHeader />
          </div>
        </UserProvider>
      </DiseasesProvider>
    </HealthTeamProvider>
  );
}

export default App;
