import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import ListProfessionals from "../component/listProfessional";

export default function Professional() {
  return (
    <div>
      <ListProfessionals />
      <Link to="/">
        <Button variant="contained" href="#contained-buttons">
          main page
        </Button>
      </Link>
    </div>
  );
}
