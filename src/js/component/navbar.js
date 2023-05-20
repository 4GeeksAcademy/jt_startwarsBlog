import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<div className="container mx-5">
     				 <img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png" alt="StarWars" width="100"/>
  			</div>
			</Link>
			<div className="dropdown">
  				<a className="btn btn-warning dropdown-toggle mx-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    			Favorites <span className="badge text-dark">4</span>
  				</a>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Action<i className="fas fa-times"></i></a></li>
					<li><a className="dropdown-item" href="#">Another<i className="fas fa-times"></i></a></li>
					<li><a className="dropdown-item" href="#">Something <i className="fas fa-times"></i></a></li>
				</ul>
			</div>
		</nav>
	);
};
