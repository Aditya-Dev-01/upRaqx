import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mainRouter from "./mainroutes/mainrouter";
import { DatabaseMongo } from "./config/mongo_config";
import helmet from "helmet";
import path from "path";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger";  

export function runServer() {
  try {
    dotenv.config();
    const app: Application = express();
    const port = process.env.PORT || 8080;

    const corsOptions = {
      origin: ["http://localhost:3000"],
      credentials: true,
    };

    app.use(
      helmet({
        contentSecurityPolicy: false,
        xDownloadOptions: false,
      })
    );

    app.use(cors(corsOptions));
    
    app.use('/uploads', express.static(path.join(process.cwd(), '/uploads')));

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not defined.");
    }

    const db = new DatabaseMongo(process.env.MONGODB_URI);

    app.use(express.json());

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    db.connectMongo().catch((err) => {
      console.error("MongoDB connection error: ", err);
    });

    app.get("/server-status", (req, res) => {
      res.status(200).json({ message: "Server is up and running!" });
    });


    app.use("/api", mainRouter);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });

  } catch (err) {
    console.error("Error in server startup:", err);
  }
}

runServer();
