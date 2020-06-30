import express from 'express'
import {Request, Response, Application, NextFunction} from 'express'

const app: Application = express();

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
    res.send(`Welcome on ${req.baseUrl}`);
});

export default app;