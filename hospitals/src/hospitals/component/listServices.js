import React from "react";
import TextField from "@mui/material/TextField";

export default function HospitalServices() {
  return (
    <div>
      <h1>find by services</h1>
      <TextField
        variant="standard"
        helperText="Search services by name of proceedure"
      />
      {/* <ul>
        {props.items.map((item) => (
          <hospitalsDetails
            key={item.id}
            id={item.id}
            Name={item.name}
            address={item.address}
            services={item.services.map((item) => item)}
            contact={item.contact}
          />
        ))}
      </ul> */}
    </div>
  );
}
