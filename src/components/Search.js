import React, { useEffect, useState } from "react";

export default function Search(props) {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]);
  return (
    <div style={{ textAlign: "center" }}>
      <input
        name="search"
        value={searchText}
        onChange={handleChange}
        placeholder="search country"
      />
    </div>
  );
}
