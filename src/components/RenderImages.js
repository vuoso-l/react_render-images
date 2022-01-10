import React from "react";
import "./RenderImages.css";

const RenderizadoImages = () => {
  return (
    <div>
      <h2>Imágenes</h2>
      <div className="container">
        <div className="item">
          <img src="../images/leon.jpg" alt="León"/>
          <h2>El leon</h2>
          <p>
            El león (Panthera leo) es un mamífero carnívoro de la familia de los
            félidos y una de las cinco especies del género Panthera. Los leones
            salvajes viven en poblaciones cada vez más dispersas y fragmentadas
            del África subsahariana (a excepción de las regiones selváticas de
            la costa del Atlántico y la cuenca del Congo) y una pequeña zona del
            noroeste de India
          </p>
        </div>
      </div>
    </div>
  );
};

export default RenderizadoImages;
