import "./App.css";
import { Routing } from "./routes";

import { AppContextProvider } from "./context/store";



function App() {
  return (
      <AppContextProvider>
        <Routing />
      </AppContextProvider>
  );
}

export default App;
