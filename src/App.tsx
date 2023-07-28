import React from 'react';
import { FormSection } from './packages';

function App() {
  return (
    <div className='App'>
      <FormSection
        renderTitle={(color) => (
          <>
            Sign up for a <span style={{ color }}>free consultation</span>
          </>
        )}
        description='Fill out the contact form - we will contact you within an hour and answer any questions'
        formTranslations={{
          language: 'en',
          content: {
            acceptTerms:
              '* by clicking the button, you accept the terms of the policy and the user agreement',
            formSubmitted: (
              <>
                Form sent successfully!
                <br />
                Thank You!
              </>
            ),
          },
        }}
      />
    </div>
  );
}

export default App;
