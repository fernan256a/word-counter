import React from "react";

export const Summary = ({chars, words}) => (
  <div className="d-flex">
    <h6 className="me-5">{`TOTAL WORDS: ${words}`}</h6>
    <h6>{`TOTAL CHARACTERS: ${chars}`}</h6>
  </div>
)
