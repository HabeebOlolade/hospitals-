import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/hospitals">
        <Button variant="contained" href="#contained-buttons">
          Hospitals
        </Button>
      </Link>
      <Link to="/services">
        <Button variant="contained" href="#contained-buttons">
          Service
        </Button>
      </Link>
      <Link to="/professionals">
        <Button variant="contained" href="#contained-buttons">
          Professional
        </Button>
      </Link>
    </div>
  );
}
