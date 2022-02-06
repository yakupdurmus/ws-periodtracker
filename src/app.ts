import express from "express";
import { getUser } from "./services/user";
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/user", (req, res) => {
  getUser((result) => {
    res.send(result);
  });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
