import React from 'react'
import {connect} from 'react-redux'

class Cart extends React.Component{

	render(){
		return(
			<>
            soy el componente cart
			</>
		)
	}
	

}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => {
	return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
