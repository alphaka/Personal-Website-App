const mailgun = require("mailgun-js");
const DOMAIN = "sandboxc....mailgun.org";
const APIKEY = "4466....";
const mg = mailgun({ apiKey: APIKEY, domain: DOMAIN });

const sendMail = (name, email, subject, text, cb) => {
  const data = {
    from: email,
    to: "kabaa346@gmail.com",
    subject: `Name: ${name}, Subject: ${subject}      `,
    text,
  };
  mg.messages().send(data, function (error, body) {
    if (error) cb(error, null);
    else cb(null, body);
  });
};

module.exports = sendMail;
