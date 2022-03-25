import "bootstrap/dist/css/bootstrap.min.css";
import DiseasesProvider from "./store/DiseasesProvider";

import PageHeader from "./components/PageHeader";

import "./App.css";
import UserProvider from "./store/UserProvider";

function App() {
  return (
    <DiseasesProvider>
      <UserProvider>
        <div>
          <PageHeader />
        </div>
      </UserProvider>
    </DiseasesProvider>
  );
}

export default App;
