const noteModel = require('../models/NotesModel.js');
const express = require('express');
const noteRoutes = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
noteRoutes.post('/notes', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    const { noteTitle, noteDescription, priority, dateAdded, dateUpdated } = req.body.content;

    try {
        const newNote = new noteModel({
            noteTitle,
            noteDescription,
            priority,
            dateAdded,
            dateUpdated
        });
        const savedNote = await newNote.save();
        res.status(201).send(savedNote);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
noteRoutes.get('/notes', async (req, res) => {
    try {
        const notes = await noteModel.find();
        res.status(200).send(notes);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoutes.get('/notes/:noteId', async (req, res) => {
    try {
        const note = await noteModel.findById(req.params.noteId);
        if (!note) return res.status(404).send({ message: "Note not found" });
        res.status(200).send(note);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoutes.put('/notes/:noteId', async (req, res) => {
    if (!req.body.content) {
        return res.status(400).send({ message: "Note content cannot be empty" });
    }

    const { noteTitle, noteDescription, priority, dateAdded, dateUpdated } = req.body.content;

    try {
        const updatedNote = await noteModel.findByIdAndUpdate(
            req.params.noteId,
            { noteTitle, noteDescription, priority, dateAdded, dateUpdated },
            { new: true }
        );
        if (!updatedNote) return res.status(404).send({ message: "Note not found" });
        res.status(200).send(updatedNote);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    try {
        const deletedNote = await noteModel.findByIdAndDelete(req.params.noteId);
        if (!deletedNote) {
            return res.status(404).send({ message: "Note not found" });
        }
        res.status(200).send({ message: "Note deleted successfully" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = noteRoutes;
