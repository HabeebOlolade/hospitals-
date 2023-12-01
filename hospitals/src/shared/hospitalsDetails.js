import React from "react";

export default function HospitalsDetails(props) {
  return (
    <div>
      <h2>hospitals Details</h2>
      <li>
        <h4>{props.id}</h4>
        <h4>{props.name}</h4>
        <p>{props.address}</p>
        <p>{props.services}</p>
        <p>{props.contact}</p>
      </li>
    </div>
  );
}
