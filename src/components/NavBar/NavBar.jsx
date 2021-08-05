import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';


export default function NavBar({ user, setUser }) {
	function handleLogOut() {
		usersService.logOut();
		setUser(null);
	}

	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
		  <Link class="navbar-brand" to="/streamers">Welcome, {user.name}!</Link>
		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div class="navbar-nav">
			  <Link class="nav-link active" aria-current="page" to="/streamers">All Profiles</Link>
			  <Link class="nav-link" to="/streamers/new">Add Profile</Link>
			  <Link class="nav-link" to="" onClick={handleLogOut}>Log Out</Link>
			</div>
		  </div>
		</div>
	  </nav>
	);
}
