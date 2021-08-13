import logo from "./logo.svg";
import "./App.css";
import SignUp from "./signup/SignUp";
import React from "react";

function App() {
  const [hasSignedUp, setHasSignedUp] = React.useState(false);
  return (
    <>
      {!!hasSignedUp ? (
        <div class="easter-egg">
          <div class="position-relative congrats">
            <span>
              Thank you for connecting with us. We will reply to you ASAP.
            </span>
            <span>Have a good day.</span>
          </div>
        </div>
      ) : (
        <SignUp setHasSignedUp={setHasSignedUp} />
      )}
    </>
  );
}

export default App;
