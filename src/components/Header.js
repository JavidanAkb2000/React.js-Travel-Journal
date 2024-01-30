import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    return(
        <div className="heading">
          <h4><i><FontAwesomeIcon icon={faEarthAmericas} /></i> My travel journal</h4>
        </div>
    )
}