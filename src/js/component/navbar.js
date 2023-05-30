import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<div className="container mx-5">
     				 <img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png" alt="StarWars" width="100"/>
  			</div>
			</Link>
			<div className="dropdown">
  				<a className="btn btn-warning dropdown-toggle mx-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    			Favorites <span className="badge text-dark">{store.favorites.length}</span>
  				</a>
				<ul className="dropdown-menu m-2">
					{
						store.favorites.length === 0 ? (
    					<li className="dropdown-item m-1">vacío</li>
  						) : (
						store.favorites.map((item, index)=> {
							return <li className="dropdown-item mx-1" key={index}>{item}<button className="btn btn-outline-dark btn-sm mx-2" onClick={()=> {actions.removeFavorite(index)}}><i className="fas fa-trash"></i></button></li>
							}))
					}
				</ul>
			</div>
		</nav>
	);
};
