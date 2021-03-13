//dependencies
const express = require('express');
const apiRoute = require('./route/apiRoute');
const htmlRoute = require('./route/htmlRoute');

//express setup
const app = express();


const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

//links routes
app.use('/api', apiRoute);
app.use('/', htmlRoute)

//listeners 
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
