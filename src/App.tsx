import React from "react";
import { OfficesLanding } from "./packages/components/Landings/OfficesLanding";
import { AboutUsLanding, DeutshLanding, GrantsLanding } from "./packages";
import { CzechLanguageLanding } from "./packages/components/Landings/CzechLanguageLanding";

function App() {

  return (
    <CzechLanguageLanding
      lang="ru"
      btnAction={() => {
        console.log("test");
      }}
    />
  );
}

export default App;
