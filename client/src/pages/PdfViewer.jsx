import React from "react";

import { useLocation } from "react-router-dom";

const PdfViewer = () => {

  const location = useLocation();

  const queryParams =
    new URLSearchParams(location.search);

  const file =
    queryParams.get("file");

  return (

    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#111827",
      }}
    >

      <iframe
        src={file}
        title="PDF Viewer"
        width="100%"
        height="100%"
        style={{
          border: "none",
        }}
      />

    </div>
  );
};

export default PdfViewer;