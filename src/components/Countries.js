import React from "react";
import { v4 as uuid } from "uuid";
import Country from "../components/Country";
export default function Countries(props) {
  return (
    <section>
      {props.countries.map((country) => {
        const countryNew = { country, id: uuid() };
        return <Country {...countryNew} key={countryNew.id} />;
      })}
    </section>
  );
}
