import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
	function handleLogOut() {
		usersService.logOut();
		setUser(null);
	}

	return (
		<nav>
			<Link to='/streamers'>Streamer List</Link>
			&nbsp; | &nbsp;
			<Link to='/streamers/new'>New Streamer</Link>
			&nbsp; | &nbsp;
			<span>
				<b>Welcome, {user.name}</b>
			</span>
			&nbsp; | &nbsp;
			<Link to='' onClick={handleLogOut}>
				Log Out
			</Link>
		</nav>
	);
}

