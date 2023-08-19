import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';



import Connection from './database/db.js';
import router from './routes/route.js';




const app = express();




app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);



Connection();



const PORT  = 8000;



app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})