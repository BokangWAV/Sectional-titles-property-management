import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import FinesDashBoard from "./FinesDashboard";

function Fines() {
  const location = useLocation();
  const currentlocation = location.pathname.split("/")[3];
  switch (currentlocation) {
    case "update":
      return <Outlet />;
    default:
      return <FinesDashBoard />;
  }
}

export default Fines;
