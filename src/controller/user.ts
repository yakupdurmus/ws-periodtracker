import * as Model from "model";
import app from "app";

app.get("/", (req, res) => {
  res.send("Welcome home page");
});
app.get("/user", (req, res) => {
  Model.User.getUser().then((response) => {
    console.log("response", response);
  });
});
