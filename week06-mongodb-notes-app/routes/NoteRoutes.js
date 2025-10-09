const noteModel = require('../models/NotesModel.js');
const express = require('express');
const noteRoutes = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
noteRoutes.post('/', (req, res) => {
    // Validate request
    const { noteTitle, noteDescription, priority, dateAdded, dateUpdated } = req.body;
    if(!noteTitle || !noteDescription) {
        return res.status(400).send({
            message: "All fields are required"
        });
    }
    //TODO - Write your code here to save the note
    const newNote = new noteModel({
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority,
        dateAdded: req.body.dateAdded,
        dateUpdated: req.body.dateUpdated
    });    

    newNote.save().then(note => {
        res.send(note);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    })

});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
noteRoutes.get('/', (req, res) => {
    //TODO - Write your code here to returns all note
    noteModel.find().then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoutes.get('/:noteId', (req, res) => {
    const { noteId } = req.params;
    // Validate request
    if(!noteId) {
        return res.status(400).send({
            message: "Note ID is required"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    noteModel.findById(noteId).then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + noteId
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + noteId
        });
    });
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoutes.put('/:noteId', (req, res) => {
    const { noteId } = req.params;
    // Validate request
    if(!noteId) {
        return res.status(400).send({
            message: "Note ID is required"
        });
    }
    //TODO - Write your code here to update the note using noteid

    const { noteTitle, noteDescription, priority, dateAdded, dateUpdated } = req.body;

    noteModel.findByIdAndUpdate(noteId, {
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority,
        dateAdded: req.body.dateAdded,
        dateUpdated: req.body.dateUpdated
    }, { new: true }).then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + noteId
            });
        }
        return res.status(500).send({
            message: "Error updating note with id " + noteId
        });
    });

});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoutes.delete('/:noteId',  async (req, res) => {
  try {
    const note = await noteModel.findByIdAndDelete(req.params.noteId);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    return res.json({ message: "Note deleted successfully", note });
  } catch (err) {
    return res.status(400).json({ message: "Invalid noteId" });
  }
});

module.exports = noteRoutes;
