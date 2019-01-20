var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var URLSlugs = require('mongoose-url-slugs');


var videoModel = new Schema({
    name: {type:String},
    url: {type:String},
    description: {type: String, default: ""},
    youtubeId: {type: String, default: ""},
    thumbnailUrl: {type: String, default: ""}
})

videoModel.plugin(URLSlugs('name', {field: 'slug', update:true}));

module.exports = mongoose.model('Video', videoModel);