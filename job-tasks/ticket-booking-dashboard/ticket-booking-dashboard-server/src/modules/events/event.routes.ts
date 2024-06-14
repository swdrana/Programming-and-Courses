import express from 'express';
import { createEvent, getAllEvents, getEventById } from './event.controller';

const router = express.Router();

router.post('/', createEvent);
router.get('/', getAllEvents);
router.get('/:eventId', getEventById);

export default router;
