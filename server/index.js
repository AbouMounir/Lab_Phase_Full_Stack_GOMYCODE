import express, { response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDb from './db.js';
import router from './routes/Router.js';


const PORT = 3001;
const app = express(); 
app.use(express.json());

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.get(('/'), (req,res) => {
    res.send(response.config)
})



connectDb();

app.use(('/'), router)


app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('server in running on port ' + PORT);
})