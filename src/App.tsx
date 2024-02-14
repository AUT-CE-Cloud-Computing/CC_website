import "./App.css";
import { Routing } from "./routes";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDzvuJigYhF9UwcM9au3KA_P3WAAYKOTaE",
  authDomain: "cc-content.firebaseapp.com",
  projectId: "cc-content",
  storageBucket: "cc-content.appspot.com",
  messagingSenderId: "239266734542",
  appId: "1:239266734542:web:a7bd34c623f69cbf41cb9f",
  measurementId: "G-ECNQMX9NEW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <Routing />
  );
}

export default App;
