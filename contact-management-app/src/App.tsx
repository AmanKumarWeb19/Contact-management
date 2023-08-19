// src/App.tsx
import React from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import LineChart from "./components/LineChart";

import CovidMap from "./components/Map";

function App() {
  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-xl font-bold">Contact Management App</h1>
      {/* <ContactForm />
      <ContactList /> */}
      {/* <LineChart/> */}
      <CovidMap />
    </div>
  );
}

export default App;
