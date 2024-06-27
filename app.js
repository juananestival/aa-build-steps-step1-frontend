import express from 'express';
import indexRouter from './routes/index.js';

const app = express();
app.set('views', 'views')
app.set('view engine', 'ejs');

// Middleware. We can get get data through get strings or json data
app.use(express.json());

// Extended true will allow nested date
app.use(express.urlencoded({ extended: true }));

// Everything in public we won't need a route for them like mages
app.use(express.static('public'));

app.get('/', indexRouter);

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
