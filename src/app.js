import express from "express";
import path from "path";
import morgan from "morgan";
import { theIPAddress, port } from './libraries/netConfig.js';
import routerApi from "./routes/index.js";
import { fileURLToPath } from "url";


const app = express();

// config

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");


// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

(async () => {
  // Await the app to start listening on the specified IP address and port
  const createApp = await app.listen(port, theIPAddress, (req, res) => {
    // Log the server start information to the console
    console.log(`server on port http://${theIPAddress}:${port}`);
  });
})();

// Rutes
routerApi(app);

//  static files
app.use(express.static(path.join(__dirname, "public")));


export default app;
