import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {connect} from 'react-redux'


const Basket = (props) => {

	const onPayPalCreateOrder = (data, actions) => {
		return actions.order.create({
		  purchase_units: [
		      {
			  amount: {
			      value: props.price,
			  },
		      },
		  ],
		});
	}

	const onPayPalApprove = (data, actions) => {
		return actions.order.capture().then((details) => {
		const name = details.payer.name.given_name;
		alert(`Transaction completed by ${name}`);
		});
	}

	return (
        <PayPalScriptProvider options={{ "client-id": "AVwC9go19k3v-1HU5T8wUDa-qS6TmP6_nH7RAesdYWv4_KURqO9gD7j9vX7Bp-BzLdSZnYhd8Qv-tOZT", currency: "USD" }}>
            <PayPalButtons style={{ layout: "horizontal" }} createOrder={onPayPalCreateOrder} onApprove={onPayPalApprove} />
        </PayPalScriptProvider>
	)
}

const mapStateToProps = (state) => {
	return {
		inShopGames:state.gamesReducer.inShopGames
	}
}

export default connect(mapStateToProps, null)(Basket)
