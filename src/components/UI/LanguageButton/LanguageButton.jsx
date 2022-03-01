import React from "react";

import classes from "./LanguageButton.module.css";

const LanguageButton = ({ language, setLanguage }) => {
  return (
    <button
      className={classes.LanguageButton}
      onClick={() => setLanguage(prevValue => !prevValue)}
    >
      {language ? "English" : "Español"}
    </button>
  );
};

export default LanguageButton;
