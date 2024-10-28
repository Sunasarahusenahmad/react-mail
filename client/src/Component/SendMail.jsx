import React, { useEffect } from "react";
// const URL = process.env.REACT_APP_URL || "http://localhost:5173";
// const PORT = process.env.REACT_APP_PORT || 5173;

// console.log(`URL: ${URL}`);
// console.log(`Port: ${PORT}`);

const SendMail = ({ to, from, subject, message, appPassword, service }) => {
  const sendEmail = async () => {
    try {
      const response = await fetch(`http://localhost:8000/send-mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to,
          from,
          subject,
          message,
          appPassword,
          service,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Email sent successfully:", data);
      } else {
        console.error("Failed to send email:", data.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  useEffect(() => {
    if (to && from && subject && message && appPassword && service) {
      sendEmail();
    }
  }, [to, from, subject, message, appPassword, service]);

  return <></>;
};

export default SendMail;
