// import some node modules for later

const fs = require("node:fs");
const path = require("node:path");

// create express app

const express = require("express");

const app = express();

// use some application-level middlewares

app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://localhost:3306");
  res.header("Access-Control-Allow-Origin", "http://localhost:5000");
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS",
    "PUT",
    "DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type",
    "X-Auth-Token",
    "Origin",
    "Authorization"
  );
  next();
});
app.use(
  cors({
    origin: [
      "*",
      "http://localhost:5173",
      "http://localhost:3000",
      "http://localhost:5173",
    ],
    optionsSuccessStatus: 200,
  })
);

// import and mount the API routes

const router = require("./routes/index.route");

app.use(router);

// serve the `backend/public` folder for public resources

app.use(express.static(path.join(__dirname, "../public")));

// serve REACT APP

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources

  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  // redirect all requests to the REACT index file

  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export

module.exports = app;
