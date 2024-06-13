const express = require("express");
const moment = require("moment-timezone");

const app = express();
const port = process.env.PORT || 3000;

app.get("/time", (req, res) => {
  const { timezone } = req.query;
  const currentTime = moment.utc().format();

  let response = { currentTime };

  if (timezone) {
    try {
      const isValidTimezone = moment.tz.zone(timezone);
      if (!isValidTimezone) {
        throw new Error("Invalid timezone");
      }
      const adjustedTime = moment.tz(timezone).format();
      response.adjustedTime = adjustedTime;
    } catch (e) {
      return res.status(400).json({ error: "Invalid timezone" });
    }
  }

  res.json(response);
});

let server;
if (require.main === module) {
  server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
} else {
  server = app.listen();
}

module.exports = { app, server };
