var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        app.listen(parseInt(PORT) || 5000, () => console.log(`Server started on port ${PORT}`));
    }
    catch (error) {
        console.log(error);
    }
}))();
//# sourceMappingURL=index.js.map