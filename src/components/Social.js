import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
const Social = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faYoutube} color="white" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
