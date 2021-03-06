var express = require('express');
const Playlist = require('../models/playlist');
var mongoose = require('mongoose');
var router = express.Router();


router.get('/api/details', (req, res) => {

    Playlist.find({user_id : req.body.user_id}, (err, result) => { 
        if (err) return res.json(err)

        res.send(result)
    })
})

router.post('/api/details', (req, res) => {
    console.log(req.body);
    const newPlaylist = new Playlist({
        user_id : req.body.user_id,
        genres : req.body.genres,
        acousticness : req.body.acousticness,
        danceability : req.body.danceability,
        energy : req.body.energy,
        instrumentalness : req.body.instrumentalness,
        liveness : req.body.liveness,
        loudness : req.body.loudness,
        popularity : req.body.popularity,
        speechiness : req.body.speechiness,
        tempo : req.body.tempo,
        valence : req.body.valence
    });
    newPlaylist.save((err, event) => {
        if (err) return res.json(err);
        res.send(event);
    })
})

module.exports = router;