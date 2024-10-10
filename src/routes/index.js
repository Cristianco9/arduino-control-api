import { Router } from "express";
import arduinoRouter from "./arduinoRouter.js";

const routerApi = (app) => {

  const router = Router();

  app.use('/api/v1', router);

  router.use('/arduino', arduinoRouter);

};

export default routerApi;
