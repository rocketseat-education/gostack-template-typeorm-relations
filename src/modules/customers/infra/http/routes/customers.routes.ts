import { Router } from 'express';

import CustomersController from '../controller/CustomersController';

const appointmentsRouter = Router();
const customersController = new CustomersController();

appointmentsRouter.post('/', customersController.create);

export default appointmentsRouter;
