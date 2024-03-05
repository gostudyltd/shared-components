import React from "react";
import { AboutUsLanding, DeutshLanding } from "./packages";

function App() {
  return (
    <DeutshLanding
      lang="uk"
      cdnUrl="https://images.gostudy.cz/static"
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
