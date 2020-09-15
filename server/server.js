import express, { response } from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import "isomorphic-fetch";

const PORT = process.env.PORT || 8000;

const app = express();

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Something went wrong!");
    }
    const url = "https://api.spaceXdata.com/v3/launches?limit=100";
    fetch(url)
      .then((response) => response.json())
      .then((fetchedData) => {
        const dataToSend = data
          .replace(
            '<div id="root"></div>',
            `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
          )
          .replace(
            '<script>window.__STATE__="akul"</script>',
            `<script>window.__STATE__=${JSON.stringify(fetchedData)}</script>`
          );
        return res.send(dataToSend);
      });
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
