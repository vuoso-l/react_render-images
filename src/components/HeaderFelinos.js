import React, {useState} from "react";
import "./HeaderFelinos.css";

const HeaderFelinos = () => {
    const [theme, setTheme] = useState(".dark");

    /* const handleTheme = () => {
        setTheme()
    } */

  return (
    <div>
      <h1>
        La familia de los felinos <button>Cambiar tema</button>
      </h1>
    </div>
  );
};

export default HeaderFelinos;
