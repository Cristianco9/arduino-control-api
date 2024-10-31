import { Router } from "express";
import handControlPanel from "../controllers/UI/handControlPanel.js";

const arduinoRouter = Router();

arduinoRouter.get(
  '/',
  handControlPanel
);

export default arduinoRouter;
