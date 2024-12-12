//packages imports
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';

//files imports
import connectDB from './config/db.js';
import testRoutes from './routes/testRoutes.js';

//dotenv config
dotenv.config()

//mongodb connection
connectDB();

//rest objects
const app = express()

//middelwares
app.use(express.json()); 
app.use(cors());
app.use(morgan("dev"));

///routes
/*app.get('/',(req, res) => {
     res.send('<h1> Welcome to JobPortal</h1>')
});
*/
app.use('/api/v1/test', testRoutes);

//port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, () =>{
    console.log(`node server in ${process.env.DEV_MODE} Mode on port no ${PORT}`.bgCyan.white);
});
