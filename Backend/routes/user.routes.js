import express from 'express';
import { loginUser, registerUser, logoutUser, profileUser } from '../controllers/user.controller.js';
import { body } from 'express-validator'
import { authUser } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/login',
  body('email').isEmail().isLength({ min: 3 }).withMessage('Invalid Email'),
  body('password').trim().notEmpty(),
  (req, res) => {
    loginUser(req, res)
  })

router.post('/register',
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').trim().notEmpty().isLength({ min: 8 }),
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First ddd name must be at least 3 characters long'),
  (req, res) => {
    registerUser(req, res);
  })

router.get('/logout', (req, res) => {
  logoutUser(req, res);
})

router.get('/profile', authUser, profileUser)

export default router