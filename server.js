//dependency
const express = require('express');

//express setup
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

//links routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//listeners 
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
