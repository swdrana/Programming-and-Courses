import { z } from 'zod';

const dateStringToDate = z.preprocess((arg) => {
  if (typeof arg === 'string' || arg instanceof Date) {
    return new Date(arg);
  }
}, z.date());

export const eventValidationSchema = z.object({
  title: z.string({ required_error: 'Title is required' }),
  description: z.string({ required_error: 'Description is required' }),
  date: dateStringToDate,
  price: z.number({ required_error: 'Price is required' }).nonnegative(),
  capacity: z.number({ required_error: 'Capacity is required' }).nonnegative(),
});
