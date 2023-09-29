import express from 'express';
import bodyParser from "body-parser";
import todosRoutes from './routes/todos';
const app = express();

// Apply body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use your todosRoutes after applying body-parser
app.use(todosRoutes);


app.listen(4000);