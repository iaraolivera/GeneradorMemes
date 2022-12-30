const Hijo = () => {
  const user = "juan";
  //   = usoUserContenido();
  const cambioLogin = "hola";
  //    = modificacionContenido();
  return (
    <div>
      <h2>Esto es un titulo</h2>
      {/*accion*/}
      <button onClick={cambioLogin}>guardar cambios</button>
      <p>{user}</p>
    </div>
  );
};

export default Hijo;
