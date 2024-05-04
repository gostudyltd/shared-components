import React from "react";
import { OfficesLanding } from "./packages/components/Landings/OfficesLanding";
import { GrantsLanding } from "./packages";

function App() {
  return (
    <GrantsLanding
      lang="en"
      btnAction={() => {
        console.log("test");
      }}
    />
  );
}

export default App;
