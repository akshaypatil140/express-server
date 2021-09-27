import * as express from 'express';
import UserRoutes from './controller';
import validationHandler from '../../lib/routes/validationHandler';
import validation from './validation';
import authMiddleware from '../../lib/routes/authMiddleware';
import { USER } from '../../lib/constant';

export const router = express.Router();

/**
 * @swagger
 * definitions:
 *   UserSchema:
 *        properties:
 *             _id:
 *                  type: string
 *             id:
 *                  type: string
 *             originalId:
 *                  type: string
 *             name:
 *                  type: string
 *             email:
 *                  type: string
 *             password:
 *                  type: string
 *             createdAt:
 *                  type: string
 *             deletedAt:
 *                  type: string
 *   Users:
 *        type: array
 *        item:
 *        $ref: '#/definitions/UserSchema'
 *   User:
 *        type: array
 *        $ref: '#/definitions/UserSchema'
 *   UserListResponse:
 *        properties:
 *             message:
 *                  type: string
 *                  example: Success
 *             status:
 *                  type: integer
 *                  example: 200
 *             data:
 *                  $ref: '#/definitions/User'
 *   UserByIdGetResponse:
 *        properties:
 *             message:
 *                  type: string
 *                  example: Success
 *             status:
 *                  type: integer
 *                  example: 200
 *             data:
 *                  $ref: '#/definitions/User'
 */

/**
 * @swagger
 * /user:
 *   get:
 *        tags: [USER]
 *        description: Returns all the user
 *        security:
 *             - bearerAuth: []
 *        responses :
 *             200:
 *                  description: Array of user
 *                  schema:
 *                       $ref: '#/definitions/UserListResponse'
 */
router.get('/', authMiddleware(USER, 'read'), validationHandler(validation.getAll), UserRoutes.getAll);

/**
 * @swagger
 * /user/createToken:
 *   post:
 *        description: To generate authorization token
 *        tags: [USER]
 *        requestBody:
 *              description: Enter email and password to generate token
 *              required: true
 *              content:
 *                 application/json:
 *                    schema:
 *                        type: object
 *                        required:
 *                          -id
 *                          -email
 *                          -password
 *                        properties:
 *                            id:
 *                               type: string
 *                            email:
 *                               type: string
 *
 *                            password:
 *                               type: string
 *
 *
 *        responses:
 *                  200:
 *                      description: Token genrated
 */
router.post('/createToken', UserRoutes.createToken);

/**
 * @swagger
 * /user:
 *   post:
 *     description: Create New User
 *     tags: [User]
 *     requestBody:
 *        description: Enter name,email,password,role to create new user
 *        required: true
 *        content:
 *           application/json:
 *            schema:
 *             type: object
 *             required:
 *              -email
 *              -password
 *              -role
 *              -name
 *             properties:
 *               name:
 *                type: string
 *                example: 'Akshay Patil'
 *               role:
 *                type: string
 *                example: 'trainee'
 *               email:
 *                type: string
 *                example: 'akshay.patil@successive.tech'
 *               password:
 *                type: string
 *                example: 'akshay@234'
 *     responses:
 *         200:
 *           description: create user
 */
router.post('/', authMiddleware(USER, 'write'), validationHandler(validation.create), UserRoutes.post);

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     description: Update existing User
 *     tags: [User]
 *     consumes:
 *         - application/json
 *     produces:
 *         - application/json
 *     parameters:
 *         - in: path
 *           name: id
 *           schema:
 *            type: string
 *           required: true
 *           description: originalId of the user
 *           example: 1234frg43455
 *     requestBody:
 *        description: Enter field for update user
 *        required: true
 *        content:
 *           application/json:
 *            schema:
 *             type: object
 *             required:
 *              -email
 *             properties:
 *               email:
 *                type: string
 *               role:
 *                type: string
 *               password:
 *                type: string
 *                example:
 *     responses:
 *         200:
 *           description: User updated successfully
 */
router.put('/:id', authMiddleware(USER, 'write'), validationHandler(validation.update), UserRoutes.put);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     description: Delete User
 *     tags: [User]
 *     parameters:
 *         - in: path
 *           name: id
 *           schema:
 *            type: string
 *           required: true
 *           description: id of the user
 *           example: 1234frg43455
 *     responses:
 *         200:
 *           description: user deleted successfully
 */

router.delete('/:id', authMiddleware(USER, 'write'), validationHandler(validation.delete), UserRoutes.delete);

export default router;
