import React from "react";

import { GrantsLanding } from "./packages/components/Landings/GrantsLanding";

function App() {
  return (
    <GrantsLanding
      lang="ru"
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
