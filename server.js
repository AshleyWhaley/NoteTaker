//dependencies
const express = require('express');
const apiRoute = require('./routes/apiRoutes');
const htmlRoute = require('./routes/htmlRoutes');

//express setup
const app = express();


const PORT = process.env.PORT || 3010;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

//links routes
app.use('/api', apiRoute);
app.use('/', htmlRoute)

//listeners 
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});
