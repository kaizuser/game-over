const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema({
        gameName:{type:String, required:true},
	genre:{type:String, required:true},
	src:{type:String, required:true},
	size:{type:Number, required:true},
	workson:{type:String, required:true},
	company:{type:String, required:true},
	description:{type:String, required:true},
	requirements:{type:String, required:true},
	price:{type:Number, required:true}
})

const Games = mongoose.model('juegos', gamesSchema)

module.exports = Games
