import React from "react";
import { OfficesLanding } from "./packages/components/Landings/OfficesLanding";
import {
  AboutUsLanding,
  DeutshLanding,
  GrantsLanding,
  UniversityProgramLanding,
} from "./packages";
import { CzechLanguageLanding } from "./packages/components/Landings/CzechLanguageLanding";
import { CzechLanguageAndVisaLanding } from "./packages/components/Landings/CzechLanguageAndVisaLanding";

function App() {
  return (
    <UniversityProgramLanding
      withoutHubspot
      // cdnUrl={"https://images.gostudy.cz/static"}
      lang="en"
      onClick={() => {
        console.log("test");
      }}
      onSubmit={() => {}}
    />
  );
}

export default App;
