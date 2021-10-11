import express from 'express';
import { reviewController } from '../controllers';

const router = express.Router();

router.post('/', reviewController.createReview);

export default router;
