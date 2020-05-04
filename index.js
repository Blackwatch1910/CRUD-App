const express = require('express');
const appConfig = require('./config/appConfig')
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req,res) => res.send('Hello, Root'))

//bootstrap route
let routesPath = './routes';

fs.readdirSync(routesPath).forEach(function (file) {
    console.log(`${routesPath}/${file} is included`);
    console.log(`${file}`)
    if(~file.indexOf('.js')) {
        let route = require(`${routesPath}/${file}`);   //exported module gets stored here
        route.setRouter(app);
    }
})// end of bootstrap route

app.listen(appConfig.port, () => {
    console.log(`Example app listening at ${appConfig.port}`);
    let db = mongoose.connect(appConfig.db.uri, { useNewUrlParser: true, useUnifiedTopology:true });
})


// handling mongoose connection error
// mongoose.connection.on('eror', function(err) {
//     console.log('database connection error');
//     console.log(err);
// });

// mongoose.connection.on('open', function(err) {
//     if(err) {
//         console.log('database error');
//         console.log(err);

//     } else {
//         console.log('database connection open success');
//     }
// });