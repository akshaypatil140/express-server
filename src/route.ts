import { Router } from 'express';

import  { traineeRoute, userRoute }  from './controller';

const router = Router();

router.use('/trainee', traineeRoute);
router.use('/user', userRoute);
export default router;

