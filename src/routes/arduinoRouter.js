import { Router } from "express";
import testDevice from "../controllers/arduino/testDevice.js";

const arduinoRouter = Router();

arduinoRouter.post(
  '/test',
  testDevice
);

export default arduinoRouter;
