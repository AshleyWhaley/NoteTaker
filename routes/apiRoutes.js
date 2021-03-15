//dependencies 
const saved = require('../db/saved');
const router = require('express').Router();

router.get('/notes', (req,res) => {
    saved
    .getNote()
    .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    saved
    .addNote(req.body)
    .then((note) => res.json(note))
    .then((err) => res.status(500).json(err))
});

router.delete('/notes/:id', (req, res) => {
    saved 
    .deleteNote(req.params.ed)
    .then(() => res.json({ ok: true}))
    .catch((err) => res.status(500).json(err))
});

module.exports = router;