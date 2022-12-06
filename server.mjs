import express from "express";
import cors from "cors";
import path from "path";

const app = express();

const port = process.env.PORT || 5001;

app.use(cors());

app.get("/hello", (req, res) => {
  console.log("ip from /hello request : ==> ", req.ip);

  res.send(` Hello World ====>>> ${new Date().toString()} `);
});

app.get("/weather", (req, res) => {
  console.log("ip from /weather request : ==>", req.ip);

  res.send({
    temp: 28,
    minTemp: 24,
    maxTemp: 31,
    humidity: 76,
    serverTime: new Date().toString(),
  });
});

app.get("/about", (req, res) => {
  console.log("ip from /about request : ==>", req.ip);

  res.send(` This is About Page ====>>> ${new Date().toString()} `);
});

const __dirname = path.resolve();

app.use("/", express.static(path.join(__dirname, "./web/build")));
app.use("*", express.static(path.join(__dirname, "./web/build/index.html")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
