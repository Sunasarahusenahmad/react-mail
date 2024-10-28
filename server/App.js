const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));

const sendEmail = async (emailData) => {
  const { to, from, subject, message, appPassword, service } = emailData;

  let transporter = nodemailer.createTransport({
    service: service,
    auth: {
      user: from, // Sender's email
      pass: appPassword, // App password for the sender's email
    },
  });

  let mailOptions = {
    from,
    to,
    subject,
    text: message,
  };

  return transporter.sendMail(mailOptions);
};

// Route to handle sending emails
app.post("/send-mail", async (req, res) => {
  try {
    const emailData = req.body;
    await sendEmail(emailData);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(8000, () => {
  console.log("Server created at 8000");
});
