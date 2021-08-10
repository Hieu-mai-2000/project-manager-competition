const express = require('express');
const adminRoute = require('./admin')


function routes(app){
  app.use('/admin',adminRoute)

  app.use('/',function(req, res, next) {
    res.status(404).json(message:'NOT FOUND');
  })
}


module.exports = routes;
