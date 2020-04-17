import React from "react";
import AuthContext from "../context/AuthContext";

const styles =
{
  green : { backgroundColor : "green" }
  ,red : { backgroundColor : "red" }
}

export default () =>
{
  const { isAuth, setAuth } = React.useContext( AuthContext );

  return(
    <div
      style={ isAuth ? styles.green : styles.red }
    >
      { isAuth ? "OK" : "KO" }
      <hr/>
      <button onClick={ e => setAuth( ! isAuth )  }>CHANGE ME</button>
    </div>
  );
}