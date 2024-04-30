import React from "react";
import { OfficesLanding } from "./packages/components/Landings/OfficesLanding";

function App() {
  return (
    <OfficesLanding
      lang="ru"
      btnAction={() => {
        console.log("test");
      }}
      // button={{
      // text: "test",
      // onClick: () => {
      // console.log("test");
      // },
      // }}
    />
  );
}

export default App;
