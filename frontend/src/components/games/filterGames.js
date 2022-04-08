const FilterGames = (props) => {
	const {games, filter} = props

	return (
		<input placeholder='search' onKeyUp={(event) => filter(games, event.target.value)}/>
	)
}

export default FilterGames
