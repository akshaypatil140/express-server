import { Router } from 'express';
import trainee  from './controller';
import validationHandler from '../../lib/routes/validationHandler';
import validation from './validation';
import authMiddleware from '../../lib/routes/authMiddleware';
import { TRAINEES } from '../../lib/constant';

const router = Router();



router.get('/', authMiddleware(TRAINEES, 'read'), validationHandler(validation.get), trainee.get);
router.post('/', authMiddleware(TRAINEES, 'write'), validationHandler(validation.create), trainee.post);
router.put('/:id', authMiddleware(TRAINEES, 'write'), validationHandler(validation.update), trainee.put);
router.delete('/:id', authMiddleware(TRAINEES, 'delete'), validationHandler(validation.delete), trainee.delete);
router.post('/createToken', trainee.createToken);

export default router;

