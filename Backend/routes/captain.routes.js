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
  body('fullname.firstname').isLength({ min: 3 }).withMessage('Firstname must be at least 3 characters long'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 8 }),
  body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
  body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
  body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
  body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
  registerCaptain)

router.post(
  '/login',
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 8 }),
  loginCaptain)

router.get('/logout', logoutCaptain)

router.get('/profile', authCaptain, profileCaptain)

export default router;