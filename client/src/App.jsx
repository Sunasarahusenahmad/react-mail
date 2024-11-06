import { useState } from "react";
import "./App.css";
import SendMail from "./Component/SendMail";

function App() {
  const otp = "4353020"
  return (
    <>
      <SendMail
        to={"faizan.p@wanbuffer.in"}
        from={"fackidi69@gmail.com"}
        appPassword={"uczehchuqezvpvoz"}
        service={"Gmail"}
        subject={"Testing message by react-npm"}
        message={`Your otp = ${otp}`}
      />
    </>
  );
}

export default App;
