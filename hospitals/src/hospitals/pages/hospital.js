import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import ListHospitals from "../component/listHospitals";

export default function Hospitals() {
  return (
    <div>
      <ListHospitals />
      <Link to="/">
        <Button variant="contained" href="#contained-buttons">
          main page
        </Button>
      </Link>
    </div>
  );
}
