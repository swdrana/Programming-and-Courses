import mongoose from "mongoose";
import { TEvent } from "./event.interface";

const eventSchema = new mongoose.Schema<TEvent>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    price: { type: Number, required: true },
    capacity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const EventModel = mongoose.model<TEvent>("Event", eventSchema);
export default EventModel;
