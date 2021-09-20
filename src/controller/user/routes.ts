import { Router } from 'express';
import user  from './controller';
import validationHandler from '../../lib/routes/validationHandler';
import validation from './validation';
import authMiddleware from '../../lib/routes/authMiddleware';
import { USER } from '../../lib/constant';


const router = Router();



router.get('/', authMiddleware(USER, 'read'), validationHandler(validation.get), user.get);
router.post('/', authMiddleware(USER, 'write'), validationHandler(validation.create), user.post);
router.put('/:id', authMiddleware(USER, 'write'), validationHandler(validation.dataToUpdate), user.put);
router.delete('/:id', authMiddleware(USER, 'delete'), validationHandler(validation.delete), user.delete);
router.post('/createToken', user.createToken);

export default router;