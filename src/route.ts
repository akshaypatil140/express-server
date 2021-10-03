import { Router } from 'express';

import { traineeRoute, userRoute, ReviewerRoutes }  from './controller';

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
router.use('/reviewer', ReviewerRoutes);

export default router;