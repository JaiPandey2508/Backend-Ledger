require("dotenv").config();

const app = require("./src/app.js");
const connectToDB = require("./src/config/db.js");

// connectToDB();

connectToDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err);
  });
