//dependency 
const path =require('path');

//routing
module.exports = (app) => {

    //notes.html
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    //index.html
    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, '../public.index.html'));
    });
};

