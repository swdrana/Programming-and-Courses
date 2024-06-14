import { NextFunction, Request, Response } from 'express';
import { createEventInDB, getAllEventsFromDB, getEventByIdFromDB } from './event.service';
import { eventValidationSchema } from './event.validate';

export const createEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validatedEventData = eventValidationSchema.parse(req.body);
    const event = await createEventInDB(validatedEventData);
    res.json({
      status: true,
      message: 'Event created successfully',
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllEvents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const events = await getAllEventsFromDB();
    res.json({
      status: true,
      message: 'Events fetched successfully',
      data: events,
    });
  } catch (error) {
    next(error);
  }
};

export const getEventById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { eventId } = req.params;
    const event = await getEventByIdFromDB(eventId);
    if (event) {
      res.json({
        status: true,
        message: 'Event fetched successfully',
        data: event,
      });
    } else {
      res.status(404).json({
        status: false,
        message: 'Event not found',
      });
    }
  } catch (error) {
    next(error);
  }
};
