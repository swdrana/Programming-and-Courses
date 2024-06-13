import express from 'express';
import cors from 'cors';
import userRouter from './modules/users/user.route';

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/users', userRouter);


export default app;
