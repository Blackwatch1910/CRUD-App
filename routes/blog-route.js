const express = require('express');
const blogController = require('./../controllers/blog-ctrlr');

let setRouter = (app) => {

    app.get('/hello', blogController.helloWorld);
    app.get('/print', blogController.print);
    app.get('/add', blogController.add);

}// end setRouter function

module.exports = {
    setRouter: setRouter
}