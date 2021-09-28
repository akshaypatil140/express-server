import { Router } from 'express';

import { traineeRoute, userRoute }  from './controller';

const router = Router();
/**
 * @swagger
 * securityDefinitions:
 *  APIKeyHeader:
 *     type: apiKey
 *     in: header
 *     name: Authorization
 */

router.use('/trainee', traineeRoute);
router.use('/user', userRoute);

export default router;