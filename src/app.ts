import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

export default app;
