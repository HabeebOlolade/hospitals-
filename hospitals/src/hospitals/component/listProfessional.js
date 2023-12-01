import React from "react";
import TextField from "@mui/material/TextField";

export default function ListProfessionals() {
  return (
    <div>
      <h1>find a specialist</h1>
      <TextField
        variant="standard"
        helperText="Search professional by name or description"
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
