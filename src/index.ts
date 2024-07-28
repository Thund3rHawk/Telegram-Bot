import express from 'express'
import { router } from './routes';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router)

app.listen(port, () => {
    console.log(`App is listening on: http://localhost:${port}`);
})