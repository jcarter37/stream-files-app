import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';


export default function NavBar({ user, setUser }) {
	function handleLogOut() {
		usersService.logOut();
		setUser(null);
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container-fluid">
		  <Link className="navbar-brand" to="/streamers">Welcome, {user.name}!</Link>
		  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div className="navbar-nav">
			  <Link className="nav-link active" aria-current="page" to="/streamers">All Profiles</Link>
			  <Link className="nav-link" to="/streamers/new">Add Profile</Link>
			  <Link className="nav-link" to="" onClick={handleLogOut}>Log Out</Link>
			</div>
		  </div>
		</div>
	  </nav>
	);
}
