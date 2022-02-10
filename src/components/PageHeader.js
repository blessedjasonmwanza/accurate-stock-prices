import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function PageHeader(props) {
  const history = useNavigate();
  return (
    <div className="page-header">
      <button className="back-icon" onClick={() => history(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <center>
        <span className="title">
          {props.title}
        </span>
      </center>
      <span></span>
    </div>
  )
}
