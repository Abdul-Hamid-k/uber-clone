import express from 'express';
import { registerUser } from '../controllers/user.controller.js';
import { body } from 'express-validator'
import { getUser } from '../services/user.services.js';

const router = express.Router();

router.get('/', (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  const user = getUser({ email, password })
  res.send(user);
})

router.post('/register',
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').trim().notEmpty(),
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
  (req, res) => {
    registerUser(req, res);
  })

export default router