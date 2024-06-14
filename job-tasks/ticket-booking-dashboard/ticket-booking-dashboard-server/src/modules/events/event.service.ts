import { TEvent } from './event.interface';
import EventModel from './event.model';

export const createEventInDB = async (payload: TEvent) => {
  return await EventModel.create(payload);
};

export const getAllEventsFromDB = async () => {
  return await EventModel.find();
};

export const getEventByIdFromDB = async (eventId: string) => {
  return await EventModel.findById(eventId);
};
