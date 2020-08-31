import React from "react";
import SearchBar from "material-ui-search-bar";

import styles from "./Search.module.css";

function Search(props) {
  const { onChangedText } = props;
  return (
    <div className={styles.container}>
      <h2>Movie Title</h2>
      <SearchBar
        placeholder={"Enter a movie title...."}
        onChange={(newValue) => onChangedText(newValue)}
        onCancelSearch={() => onChangedText("")}
      />
    </div>
  );
}

export default Search;
