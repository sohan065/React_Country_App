import React from "react";
import style from "./MODULE/country.module.css";
export default function Country(props) {
  const { name, flags, population, area } = props.country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };
  return (
    <article className={style.country}>
      <div>
        <img src={flags.png} alt={name.common} className={style.flag} />
        <h3>Name:{name.common}</h3>
        <h3>Population:{population}</h3>
        <h3>Area:{area}</h3>
        <button
          className={style.btn}
          onClick={() => {
            handleRemoveCountry(name.common);
          }}>
          Remove
        </button>
      </div>
    </article>
  );
}
