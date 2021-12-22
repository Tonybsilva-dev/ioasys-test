import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';
import '../typeorm';
import { logRequests } from '../../middlewares/logRequests';
import { errorHandling } from '../../errors/ErrorHandling'


const app = express();

app.use(cors());
app.use(express.json());
app.use(logRequests)
app.use('/api', routes);
app.use(errorHandling)


app.listen( 3333, () => {
    console.log('✅ Server started on port 3333!');
} )