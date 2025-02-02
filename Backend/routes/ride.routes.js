import express from 'express';
import { body } from 'express-validator'
import { authUser } from '../middlewares/auth.middleware.js'
import { CreateUserRide } from '../controllers/ride.controller.js';

const router = express.Router();

router.post('/create',
  [body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid Pick up address.'),
  body('destination').isString().isLength({ min: 3 }).withMessage('Invalid Destination up address.'),
  body('vehicleType').isString().isIn(['auto', 'car', 'motorcycle']).withMessage('Invalid Vehicle Type')
  ],
  authUser,
  CreateUserRide
)

export default router;