import { Router } from "express";
import handRouter from "./handRouter.js";
import arduinoRouter from "./arduinoRouter.js";

const routerApi = (app) => {

  const router = Router();

  app.use('/app/v1', router);

  router.use('/', handRouter);
  router.use('/arduino', arduinoRouter);

};

export default routerApi;
