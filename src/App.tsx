import React from "react";
import {
  FormSection,
  formSectionContent1,
  getTranslationByLang,
} from "./packages";

function App() {
  return (
    <FormSection
      hubspotConfig={{
        portalId: "139617067",
        formId: "d9a6bed0-c54d-4981-a619-11adc2e36fcf",
        onSubmit: () => {},
      }}
      description="test"
      {...getTranslationByLang(formSectionContent1, "uk", "ru")}
    />
  );
}

export default App;
