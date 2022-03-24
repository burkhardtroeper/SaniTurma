import "bootstrap/dist/css/bootstrap.min.css";
import DiseasesProvider from "./store/DiseasesProvider";

import PageHeader from "./components/PageHeader";

import "./App.css";

function App() {
  return (
    <DiseasesProvider>
      <div>
        <PageHeader />
      </div>
    </DiseasesProvider>
  );
}

export default App;
