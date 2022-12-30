import React, { useState, useContext } from "react";

export function UserProvider() {
  const [user, setUser] = useState(null);

  const cambioLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        nombre: "Juan",
        mail: "juan@cac.com.ar",
      });
    }
  };
  return (
    <div>
      <h1>hola</h1>
    </div>
  );
}
