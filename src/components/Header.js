import React from "react";
import chile from "../assets/img/chile.png"
import {Media} from "reactstrap";

const Header = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="align-self-center me-2">
          <Media src={chile} alt="Logo"/>
        </div>
        <h1 className="m-0">Let's get spicy</h1>
      </div>
      <p>Bacon Ipsum Generator</p>
    </div>
  )
}

export default Header;
