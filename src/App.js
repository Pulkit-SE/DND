import React from "react";
import Cards from "../src/screens/Cards";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';

import "./App.css";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Cards />
      </DndProvider>
    </div>
  );
}

export default App;
