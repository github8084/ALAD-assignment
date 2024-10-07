import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import router from "./routes/index.js";
import { errorMiddleware } from "./middleware/errorHandler.js";
import { sequelize } from "./database/index.js";
import fs from "fs";

const PORT = process.env.PORT;
if (!fs.existsSync(path.join(process.cwd(), "build", "static"))) {
  fs.mkdirSync(path.join(process.cwd(), "build", "static"));
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.use(express.static(path.join(process.cwd(), "build", "static")));
app.use(errorMiddleware);

(async () => {
  try {
    await sequelize.authenticate();
    //await sequelize.sync({alter:true});
    app.listen(parseInt(PORT as string) || 5000, () =>
      console.log(`Server started on port ${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
})();
