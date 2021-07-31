import * as userService from '../../utilities/users-service'

function OrderHistoryPage() {
	async function handleCheckToken() {
		const expDate = await userService.checkToken();
		console.log(expDate)
	}
	return (
		<>
		 <h1>OrderHistoryPage</h1>
		 <button onClick={handleCheckToken}>Check Login</button>
		 </>
	);
}

export default OrderHistoryPage;
