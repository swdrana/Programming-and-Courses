import express from 'express';
import cors from 'cors';
import userRouter from './modules/users/user.route';
import eventRouter from './modules/events/event.routes';
import errorHandler from './common/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/api/users', userRouter);
app.use("/api/events", eventRouter);

// Use the error-handling middleware
app.use(errorHandler);

export default app;
