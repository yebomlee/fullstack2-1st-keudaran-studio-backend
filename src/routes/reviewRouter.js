import express from 'express';
import { reviewController } from '../controllers';

const router = express.Router();

router.get('/', reviewController.getReviews);

export default router;
