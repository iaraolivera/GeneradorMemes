import React, { useState } from "react";
import Imagenmeme from "./Componentes/Imagenmeme";
import Hijo from "./Componentes/Hijo";
import { UserProvider } from "./Componentes/UserProvider";

function App() {
  return (
    <div className="text-center">
      <Hijo />

      <Imagenmeme />
    </div>
  );
}

export default App;
