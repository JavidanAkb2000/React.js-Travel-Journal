import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from "@fortawesome/free-solid-svg-icons";

export default function Cards(props){
    console.log(props);
    return(
        <div className="cards">
          <div className="card-img-div">
            
          <img className="card--image" src={props.imageUrl}></img>
          </div>
          <div className="textContainer">
            <h5>
            {props.location} <span style={{marginLeft:"10px"}}>
                <a href="${props.googleMapsUrl}">View on google maps</a>
            </span>
          </h5>
          <h1>{props.title}</h1>
          <p style={{marginBottom:"10px", color:"black"}}>{props.startDate} - {props.endDate}</p>
          <p>{props.description}</p></div>
          <hr style={{marginTop:"30px"}}></hr>
        </div>
    )
}