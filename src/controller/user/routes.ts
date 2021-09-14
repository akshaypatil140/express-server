import { Router } from 'express';
import trainee  from './controller';
import validationHandler from '../../lib/routes/validationHandler';
import validation from './validation';
import authMiddleware from '../../lib/routes/authMiddleware';
import { USER } from '../../lib/constant';


const router = Router();



router.get('/', authMiddleware(USER, 'read'), validationHandler(validation.get), trainee.get);
router.post('/', authMiddleware(USER, 'write'), validationHandler(validation.create), trainee.post);
router.put('/:id', authMiddleware(USER, 'write'), validationHandler(validation.dataToUpdate), trainee.put);
router.delete('/:id', authMiddleware(USER, 'delete'), validationHandler(validation.delete), trainee.delete);
router.post('/createToken', trainee.createToken);

export default router;