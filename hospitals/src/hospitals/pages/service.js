import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import HospitalServices from "../component/listServices";

export default function ListofService() {
  return (
    <div>
      <HospitalServices />
      <Link to="/">
        <Button variant="contained" href="#contained-buttons">
          main page
        </Button>
      </Link>
    </div>
  );
}
