import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";


export const PlanetsCards = () => {
	const {store, actions} = useContext(Context)
	return (
		<>
		<div className="container-fluid">
			<div className="row">
			<div className="scrollmenu">
		{store.planets.map((planets, index)=> {
			return (
					<div className="card m-2 col-12 col-md-4 col-lg-3 col-xl-2" key= {index}>
						<img src={`https://starwars-visualguide.com/assets/img/planets/${index+1}.jpg`} className="card-img-top" alt="..."/>
							<div className="card-body">
						 		 <h4 className="card-title mb-4">{planets.name}</h4>
						 		 <Link to={`/planet/${planets.uid}`} className="btn btn-dark mx-2">More info</Link>
						  		<button className="btn btn-danger mx-2" onClick={() => actions.setFavorite(planets.name)} disabled={store.favorites.includes(planets.name)}><i className="fas fa-heart"></i></button>
					  		</div>
			 		</div>
					
					)}
		)
		}
		</div>
		</div>
		</div>
		</>
	);
};
