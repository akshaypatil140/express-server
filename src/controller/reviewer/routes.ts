import * as express from 'express';
import reviewer from './controller';
import validationHandler from '../../lib/routes/validationHandler';
import validation from './validation';
import authMiddleware from '../../lib/routes/authMiddleware';
import { REVIEWER, REVIEWERS } from '../../lib/constant';

export const router = express.Router();

/**
 * @swagger
 * definitions:
 *   ReviewerSchema:
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
 *        $ref: '#/definitions/ReviewerSchema'
 *   User:
 *        type: array
 *        $ref: '#/definitions/ReviewerSchema'
 *   UserListResponse:
 *        properties:
 *             message:
 *                  type: string
 *                  example: Success
 *             status:
 *                  type: integer
 *                  example: 200
 *             data:
 *                  $ref: '#/definitions/Reviewer'
 *   UserByIdGetResponse:
 *        properties:
 *             message:
 *                  type: string
 *                  example: Success
 *             status:
 *                  type: integer
 *                  example: 200
 *             data:
 *                  $ref: '#/definitions/Reviewer'
 */
/**
 * @swagger
 * /reviewer/{id}:
 *   get:
 *        tags: [Reviewer]
 *        description: Returns all the trainee
 *        parameters:
 *          - in: path
 *            name: id
 *            schema:
 *             type: string
 *            required: true
 *            description: originalId of the user
 *            example: 1234frg43455
 *        security:
 *             - bearerAuth: []
 *        responses :
 *             200:
 *                  description: Array of trainee
 *                  schema:
 *                       $ref: '#/definitions/UserListResponse'
 */
 router.get('/:id', authMiddleware(REVIEWERS, 'read'), validationHandler(validation.get), reviewer.get);

/**
 * @swagger
 * /reviewer:
 *   get:
 *        tags: [Reviewer]
 *        description: Returns all the trainee
 *        parameters:
 *         - in: query
 *           name: skip
 *           schema:
 *            type: string
 *         - in: query
 *           name: limit
 *           schema:
 *            type: string
 *         - in: query
 *           name: sort
 *           schema:
 *            type: string
 *           description: sort by email or name
 *         - in: query
 *           name: search
 *           schema:
 *            type: string
 *           description: search by email or name
 *        security:
 *             - bearerAuth: []
 *        responses :
 *             200:
 *                  description: Array of user
 *                  schema:
 *                       $ref: '#/definitions/UserListResponse'
 */
 router.get('/', authMiddleware(REVIEWERS, 'read'), validationHandler(validation.getAll), reviewer.getAll);

 /**
  * @swagger
  * /reviewer:
  *   post:
  *     description: Create New User
  *     tags: [Reviewer]
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
  *                example: 'Aashlesha Chitte'
  *               role:
  *                type: string
  *                example: 'trainee'
  *               email:
  *                type: string
  *                example: 'aashlesha.chitte@successive.tech'
  *               password:
  *                type: string
  *                example: 'Aashu@123'
  *               feedback:
  *                type: array
  *                schema:
  *                  items:
  *                  type: string
  *                example: [{"communication":"str1", "comprehenesion":"integer", "bhehaviour":'string', "email_comminication":"string"}]
  *     responses:
  *         201:
  *           description: Created new user successfully
  */
 router.post('/', authMiddleware(REVIEWERS, 'write'), validationHandler(validation.create), reviewer.post);



 /**
  * @swagger
  * /reviewer/{id}:
  *   put:
  *     description: Update existing User
  *     tags: [Reviewer]
  *     consumeUsers:
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
  *               feedback:
  *                type: array
  *                schema:
  *                  items:
  *                  type: string
  *                example: [{"communication":"str1", "comprehenesion":"integer", "bhehaviour":'string', "email_comminication":"string"}]
  *     responses:
  *         200:
  *           description: User updated successfully
  */
 router.put('/:id', authMiddleware(REVIEWERS, 'write'), validationHandler(validation.update), reviewer.put);





 /**
  * @swagger
  * /reviewer/{id}:
  *   delete:
  *     description: Delete User
  *     tags: [Reviewer]
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
  *           description: User deleted successfully
  */
 router.delete('/:id', authMiddleware(REVIEWERS, 'delete'), validationHandler(validation.delete), reviewer.delete);
//  /**
//   * @swagger
//   * /reviewer/createToken:
//   *   post:
//   *     description: To generate authorization token
//   *     tags: [Reviewer]
//   *     requestBody:
//   *        description: Enter email and password to generate token
//   *        required: true
//   *        content:
//   *           application/json:
//   *            schema:
//   *             type: object
//   *             required:
//   *              -id
//   *              -email
//   *              -password
//   *             properties:
//   *               id:
//   *                type: string
//   *               email:
//   *                type: string
//   *               password:
//   *                type: string
//   *     responses:
//   *         200:
//   *           description: Token genrated
//   */

//   router.post('/createToken', reviewer.createToken);

export default router;