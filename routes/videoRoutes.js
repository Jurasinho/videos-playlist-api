var express = require('express');
var youtubeParser = require('../common/youtubeParser');
var Video = require('../models/videoModel');

var routes = function(){
    var videoRouter = express.Router();
    videoRouter.route('/')
        .post(function(req,res){
            var video = new Video(req.body);
            
            
            video.save();
    
            res.status(201).send(video);
        })
        .get(function(req,res){
            
            Video.find(function(err, videos){
                if(err){
                    console.log(err);
                    res.status(500).send(err);
                } else {
                    console.log(videos);
                    res.json(videos);
                }
            })
        });
    
    videoRouter.route('/:slug')
        .get(function(req,res){
            Video.findOne({slug:req.params.slug}, function(err, video){
                if(err)
                    res.status(500).send(err)
                else
                    res.json(video)
            })
        })
        .put(function(req, res){
            Video.findOne({slug:req.params.slug}, function(err, video){
                if(err)
                    res.status(500).send(err)
                else
                    video.name = req.body.name;
                    video.url = req.body.url;
                    video.description = req.body.description;
                    video.save();
                    res.json(video);

            })
        })
        .delete(function(req, res){
            Video.findOne({slug:req.params.slug}, function(err, video){
                if(err)
                    res.status(500).send(err)
                else
                    video.remove();
                    res.json({});
            })
        })
    return videoRouter;
}

module.exports = routes;

