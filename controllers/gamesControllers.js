const Games = require('../models/gamesModels')

const gamesControllers = {
	get_games: async(req, res) => {
		let games
		let error = null
		
		try{
			games = await Games.find()
		}
		catch(err){
			error = err
			console.log(error)
		}
		res.json({
			response:error ? 'ERROR' : {games},
			success:error ? false : true,
			error:error
		})
	},
	game_id: async(req, res) => {
		let games
		let error = null
		const id = req.params.id
		try{
			games = await Games.findOne({ _id: id })
		}
		catch(err){
			error = err
			console.log(error)
		}
		res.json({
			response:error ? 'ERROR' : {games},
			success:error ? false : true,
			error:error
		})
	},
	set_game: async(req, res) => {
		const {gameName, genre, src, size, workson, company, description, requirements, price, images} = req.body

		new Games({
			gameName,
			genre,
			src,
			size,
			workson, 
			company, 
			description,
			requirements,
			price,
			images
		}).save()

		.then((answer) => res.json({answer}))
	},

	delete_game: async(req, res) => {

		await Games.findOneAndDelete({_id:req.body.id})

	},

	modify_game: async(req, res) => {

		const {game, gameId} = req.body.game
		let modifiedGame = await Games.findOneAndUpdate({_id:gameId}, game) 
			.then((res) => res.json({res}))

	},
}

module.exports = gamesControllers
