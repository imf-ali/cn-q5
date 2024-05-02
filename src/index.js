import express from 'express';
import connectDb from './config/db.js';
import questionRoute from './routes/question.route.js';
import optionRoute from './routes/options.route.js';
import { applicationErrorHandler } from './middleware/applicationError.js';

const app = express();
app.use(express.json());

app.use('/questions', questionRoute);
app.use('/options', optionRoute);

app.use(applicationErrorHandler)

app.listen(3000, (err, res) => {
  console.log('App listening on port 3000');
  connectDb();
});