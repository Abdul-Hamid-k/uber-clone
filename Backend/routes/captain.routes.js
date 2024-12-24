import express from 'express';
import { loginCaptain, logoutCaptain, registerCaptain, profileCaptain } from '../controllers/captain.controller.js';
import { body } from 'express-validator'
import { authCaptain } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: "Welcome to Captain route" })
})

router.post(
  '/register',
  body('fullname.firstname').trim().notEmpty().isLength({ min: 3 }).withMessage('Firstname must be at least 3 characters long'),
  body('fullname.lastname').trim().isLength({ min: 3 }).withMessage('Lastname must be at least 3 characters long'),
  body('email').trim().isEmail().withMessage('Invalid email'),
  body('password').trim().notEmpty().isLength({ min: 8 }),
  body('vehicle.color').trim().notEmpty().isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
  body('vehicle.plate').trim().notEmpty().isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
  body('vehicle.capacity').trim().notEmpty().isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
  body('vehicle.vehicleType').trim().notEmpty().withMessage('Vehicle type is required'),
  registerCaptain)

router.post(
  '/login',
  body('email').trim().isEmail().withMessage('Invalid email'),
  body('password').trim().isLength({ min: 8 }),
  loginCaptain)

router.post('/logout', logoutCaptain)

router.get('/profile', authCaptain, profileCaptain)

export default router;