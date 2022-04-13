import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {connect} from 'react-redux'

import Swal from 'sweetalert2'


const Basket = (props) => {

	const onPayPalCreateOrder = (data, actions) => {
		return actions.order.create({
		  purchase_units: [
		      {
			  amount: {
			      value: props.price.toFixed(2),
			  },
		      },
		  ],
		});
	}

	const onPayPalApprove = (data, actions) => {
		const Toast = Swal.mixin({
		  toast: true,
		  position: "center-end",
		  showConfirmButton: false,
		  timer: 3000,
		  background: "#FFF",
		  // iconColor: "rgb(238, 76, 103)",
		  confirmButtonColor: "rgb(221, 46, 113)",
		  timerProgressBar: true,

		  didOpen: (toast) => {
		    toast.addEventListener("mouseenter", Swal.stopTimer);
		    toast.addEventListener("mouseleave", Swal.resumeTimer);
		  },
		});

		Toast.fire({
		  icon: "success",
		  title: `Payment made succesfully`,
		});
	}

	return (
	<>
	{props.user ? 
	(props.price ? 
        <PayPalScriptProvider options={{ "client-id": "AVwC9go19k3v-1HU5T8wUDa-qS6TmP6_nH7RAesdYWv4_KURqO9gD7j9vX7Bp-BzLdSZnYhd8Qv-tOZT", currency: "USD" }}>
		<PayPalButtons style={{ layout: "horizontal", tagline:false }} createOrder={onPayPalCreateOrder} onApprove={onPayPalApprove} />
	</PayPalScriptProvider>
	:
	<div>Add games to the cart</div>)
	:
	<div>Log in to checkout with PayPal</div>
	}
	</>
	)
}

const mapStateToProps = (state) => {
	return {
		inShopGames:state.gamesReducer.inShopGames,
	        user: state.usersReducer.user,
	}
}

export default connect(mapStateToProps, null)(Basket)
