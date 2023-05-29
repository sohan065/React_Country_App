import React, { useEffect, useState } from "react";
import Countries from "../components/Countries";

const url = "https://restcountries.com/v3.1/all";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, serError] = useState(null);
  const [countries, setCountries] = useState([]);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
      serError(null);
    } catch (error) {
      setIsLoading(true);
      serError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filterCountry = countries.filter(
      (country) => country.name.common !== name
    );
    setCountries(filterCountry);
  };
  return (
    <>
      <h1>Country App</h1>
      {isLoading && <h1>Loading...</h1>}

      {error && <h1>{error.message}</h1>}
      {countries && (
        <Countries
          countries={countries}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </>
  );
}
