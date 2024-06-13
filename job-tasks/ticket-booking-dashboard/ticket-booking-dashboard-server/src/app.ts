import express from 'express';
import cors from 'cors';
import userRouter from './modules/users/user.route';
import errorHandler from './common/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/api/users', userRouter);

// Use the error-handling middleware
app.use(errorHandler);

export default app;
