import { Router } from 'express';

import  TraineeRoutes  from './controller';

const router = Router();

router.use('/trainee', TraineeRoutes);

export default router;

