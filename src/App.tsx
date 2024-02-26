import React from "react";
import { AboutUsLanding } from "./packages";

function App() {
  return (
    <AboutUsLanding
      lang="uk"
      button={{
        text: "test",
        onClick: () => {
          console.log("test");
        },
      }}
    />
  );
}

export default App;
