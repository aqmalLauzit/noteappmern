import  express  from "express";
import notes from "./data/notes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get('/api/notes', (req,res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req,res) => {
    const note = notes.find((note) => note._id === req.params.id);
    res.json(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server running at port ${PORT}`));