import React, { useState } from "react";

import "./App.css";
/* import HeaderFelinos from './components/HeaderFelinos';
import RenderImages from './components/RenderImages'; */

const listadoFelinos = [
  {
    title: "El tigre",
    imgUrl:
      "https://cuantotiempovive.com/wp-content/uploads/2017/07/cuanto-tiempo-vive-un-tigre.jpg",
    description:
      "El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño.",
    createdAt: "2021-06-01T23:12:11.837Z",
  },
  {
    title: "El leon",
    imgUrl:
      "https://st.depositphotos.com/1004061/3547/i/600/depositphotos_35477449-stock-photo-big-lion-lying-on-savannah.jpg",
    description:
      "El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India",
    createdAt: "2021-05-05T23:12:11.837Z",
  },
  {
    title: "El leopardo",
    imgUrl:
      "https://static.nationalgeographic.es/files/styles/image_3200/public/2354.600x450.jpg?w=1600&h=1200",
    description:
      "El leopardo (Panthera pardus) es un mamífero carnívoro de familia de los félidos. Al igual que tres de los demás félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje completamente oscuro como pantera negra (melánico).",
    createdAt: "2021-05-05T23:12:10.837Z",
  },
  {
    title: "La pantera negra",
    imgUrl:
      "https://cumbrepuebloscop20.org/wp-content/uploads/2018/09/Pantera-Negra-2.jpg",
    description:
      "La pantera negra es una variación negra (melanismo) de varias especies de grandes félidos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variación negra de estos animales.",
    createdAt: "2021-04-09T23:12:11.837Z",
  },
  {
    title: "El jaguar",
    imgUrl:
      "https://wwflac.awsassets.panda.org/img/y__j__rey_millet__wwf_canon_509830.jpg",
    description:
      "El jaguar, yaguar o yaguareté (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y género Panthera. Es la única de las cinco especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Panthera leo).",
    createdAt: "2021-05-18T23:12:12.837Z",
  },
  {
    title: "El guepardo",
    imgUrl:
      "https://www.lareserva.com/sites/default/files/styles/article_image/public/field/image/chitakru.jpg?itok=DEhEtJce",
    description:
      "El guepardo o chita (Acinonyx jubatus)1​ es un miembro atípico de la familia de los félidos. Es el único representante vivo del género Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre más veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros.",
    createdAt: "2021-05-22T23:12:11.837Z",
  },
];

function App() {
  const [theme, setTheme] = useState("light");
  const [felinos, setFelinos] = useState(listadoFelinos);

  const handleBtnChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className={`${theme}`}>
      <header>
        <h1>La familia de los felinos</h1>
        <button onClick={handleBtnChange}>
          {`${theme}` === "light"
            ? "Cambiar tema a oscuro"
            : "Cambiar tema a claro"}
        </button>
      </header>
      <main>
        <h2>Imágenes</h2>
        <div className="container">
          {felinos.map((felino) => {
            return (
              <div className="item" key={felino.createdAt}>
                <img src={felino.imgUrl} alt={felino.title} />
                <h2>{felino.title}</h2>
                <p>{felino.description}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
