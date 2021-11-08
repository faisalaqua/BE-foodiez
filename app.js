const express = require("express");

const connectDB = require("./db/database");
const morgan = require("morgan");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

// Passport Strategies
const { localStrategy, jwtStrategy } = require("./middleware/passport");

const cors = require("cors");
const path = require("path");
const app = express();
const passport = require("passport");

connectDB();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(logger);
// app.use((req, res, next) => {
//   if (req.body.name === "Broccoli Soup")
//     res.status(400).json({ message: "I HATE BROCCOLI!! KEEFY! " });
//   else next();
// });
app.use(cors());

// Passport Setup
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);
// Routes

app.use("/media", express.static(path.join(__dirname, "media")));

//

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.use(errorHandler);

const PORT = 8000;
app.listen(PORT, () => console.log(`Application running on localhost:${PORT}`));
