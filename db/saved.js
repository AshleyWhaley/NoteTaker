const fs = require('fs');
const util = require('util');
const uuid = require('uuid');
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

class Saved {
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }
    getNote() {
        return this.read().then((notes) => {
            let parsedNote;
            try {
                parsedNote = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            } return parsedNote;
        });
    }
    addNote(note) {
        const {title, text} = note;
        if (!title || !text) {
            throw new Error ('Note cannot be left blank');
        }
        const newNote = {title, text, id: uuid};
        return this.getNote()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);
    } 
    removeNote(id) {
        return this.getNote()
        .then((notes) => notes.filter((note) => note.id !== id))
        .then((filterNotes) => this.write(filterNotes));
    }
}

module.exports = new Saved();