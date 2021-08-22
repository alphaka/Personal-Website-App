const mailgun = require("mailgun-js");
const DOMAIN = "sandboxc85804afeb334bcab03580d6ece85baf.mailgun.org";
const APIKEY = "4466fb9562970e514d933441d6d36c1f-9776af14-373f9c8f";
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
