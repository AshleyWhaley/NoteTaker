//dependencies 
const saved = require("../db/saved");
const router = require('express').Router();

//get route for notes in the api
router.get('/notes', (req,res) => {
    saved
    .getNote()
    .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

//post route for notes
router.post('/notes', (req, res) => {
    saved
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err))
});

//delete route for notes
router.delete('/notes/:id', (req, res) => {
    saved 
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true}))
    .catch((err) => res.status(500).json(err))
});

module.exports = router;