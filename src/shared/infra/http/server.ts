import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { errorHandling } from '../../errors/ErrorHandling';
import { logRequests } from '../../middlewares/logRequests';
import '../typeorm';
import routes from './routes';


const app = express();

app.use(cors());
app.use(express.json());
app.use(logRequests)
app.use('/api', routes);
app.use(errorHandling)


app.listen( 3333, () => {
    console.log('✅ Server started on port 3333!');
} )
