const express= require('express');


const app = express();


const port=3000;


app.use(express.urlencoded({extended: true}));

app.use(express.json())

const router=require('./server/routes/userRoute');



app.use('/',router);
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/src/index.jsx')
})


const errorHandler = require('./server/handler/handler');
app.use(errorHandler);



module.exports = app;
app.listen(port,console.log(`el servidor esta corriendo en el puerto ${port}`))





