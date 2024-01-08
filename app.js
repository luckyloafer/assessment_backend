require('dotenv').config();

const express = require('express');
const app = express();

require('./db/conn');
const router = require('./routers/router');
const cors = require('cors');

 app.use(express.json());
 app.use(cors());
app.use(router);



// app.post('/admin',(req,res)=>{
//     res.send("hello world")
// })



const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log('server started')
})