import React from "react";
import { AboutUsLanding } from "./packages";

function App() {
  return (
    <AboutUsLanding
      lang="en"
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
