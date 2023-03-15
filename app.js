const express= require('express');


const app = express();


const port=3000;
// const App=require('./src/App');
// const path = require('path');
// const ejs = require('ejs');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// app.engine('ejs', ejs.renderFile);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


app.use(express.urlencoded({extended: true}));

app.use(express.json())

const router=require('./server/routes/userRoute');


// app.get('/', (req, res) => {
//     const reactApp = ReactDOMServer.renderToString(React.createElement(App));
//     res.render('index', { reactApp });
//   });

app.use('/',router);




const errorHandler = require('./server/handler/handler');
app.use(errorHandler);



module.exports = app;
app.listen(port,console.log(`el servidor esta corriendo en el puerto ${port}`))





