import React from "react";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <CircularProgress variant="indeterminate" thickness={1} size={50} sx={{ animation: "spin 1s linear infinite", borderRadius: "50%", borderStyle: "dotted" }} />
    </div>
  );
};

export default Loading;
