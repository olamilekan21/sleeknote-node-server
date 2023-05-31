import cors from "cors";
import express from "express";
import db from "./db/models";
// routes
import auth from "./routes/auth_route";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

const main = async () => {
  //   await db();

  app.use("/auth", auth);

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to Sleeknote" });
  });

  app.listen(PORT, () => console.log("listening on port " + PORT));
};

main();
