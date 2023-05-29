import React from "react";

export default function Country(props) {
  const { name, flags, population, area } = props.country;

  return (
    <article>
      <div>
        <img src={flags.png} alt={name.common} />
        <h3>Name:{name.common}</h3>
        <h3>Population:{population}</h3>
        <h3>Area:{area}</h3>
        <button
          onClick={() => {
            console.log(props.id);
          }}>
          Details
        </button>
      </div>
    </article>
  );
}
