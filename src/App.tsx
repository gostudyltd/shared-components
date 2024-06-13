import React from "react";
import { OfficesLanding } from "./packages/components/Landings/OfficesLanding";
import { AboutUsLanding, DeutshLanding, GrantsLanding } from "./packages";
import { CzechLanguageLanding } from "./packages/components/Landings/CzechLanguageLanding";
import { CzechLanguageAndVisaLanding } from "./packages/components/Landings/CzechLanguageAndVisaLanding";

function App() {
  return (
    <CzechLanguageAndVisaLanding
      // cdnUrl={"https://images.gostudy.cz/static"}
      lang="ru"
      onClick={() => {
        console.log("test");
      }}
    />
  );
}

export default App;
