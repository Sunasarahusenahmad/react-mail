import { useState } from "react";
import "./App.css";
import SendMail from "./Component/SendMail";

function App() {
  return (
    <>
      <SendMail
        to={"sunasarahusenahmad07@gmail.com"}
        from={"fackidi69@gmail.com"}
        appPassword={"uczehchuqezvpvoz"}
        service={"Gmail"}
        subject={"New Subject"}
        message={"Contributor Faizan pathan sir."}
      />
    </>
  );
}

export default App;
