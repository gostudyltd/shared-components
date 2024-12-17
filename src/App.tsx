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
import { NewGrantsLanding } from "./packages/components/Landings/NewGrantsLanding";

function App() {
  return (
    <NewGrantsLanding
      // withoutHubspot
      // cdnUrl={"https://images.gostudy.cz/static"}
      lang="ru"
      btnAction={() => {
        console.log("test");
      }}
      onSubmit={() => {}}
    />
  );
}

export default App;
