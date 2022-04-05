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

	get_game: async(req, res) => {
		const id = req.params.id
		
		let game
		let error = null

		try{
		    game = await Games.findOne({_id:id})
		    console.log(game)
		}catch(err){
		    error = err
		    console.log(error)
		}
		res.json({
		    response: error ? 'ERROR' : game, 
		    success: error ? false : true,
		    error: error
		})
	},

	set_game: async(req, res) => {
		const {gameName, genre, src, size, workson, company, description, requirements, price} = req.body.dataInput

		new Games({
			gameName,
			genre,
			src,
			size,
			workson, 
			company, 
			description,
		}).save()

		.then((answer) => res.json({answer}))
	},

	delete_game: async(req, res) => {
		const id = req.params.id

		await Games.findOneAndDelete({_id:id})
	},

	modify_game: async(req, res) => {
	        const id = req.params.id
	        const game = req.body.dataInput

		let modified_game = await Ciudades.findOneAndUpdate({_id:id}, game) 
		.then((res) => res.json({res}))

	}

}

module.exports = gamesControllers
