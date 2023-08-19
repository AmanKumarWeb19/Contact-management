// src/App.tsx
import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";
import Graph from "./components/Graph";

function App() {
  const [selected, setSelected] = useState("contact");

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-xl font-bold">Contact Management App</h1>
      <Sidebar setSelected={setSelected} />
      {selected === "contact" && <Contact />}
      {selected === "charts" && <Graph />}
    </div>
  );
}

export default App;
