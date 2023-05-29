import React from "react";
import { v4 as uuid } from "uuid";
import Country from "../components/Country";
import style from "./MODULE/countries.module.css";
export default function Countries(props) {
  return (
    <section className={style.countries}>
      {props.countries.map((country) => {
        const countryNew = { country, id: uuid() };
        return (
          <Country
            {...countryNew}
            key={countryNew.id}
            onRemoveCountry={props.onRemoveCountry}
          />
        );
      })}
    </section>
  );
}
