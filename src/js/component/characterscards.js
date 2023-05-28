import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";


export const CharactersCards = () => {
	const {store} = useContext(Context)
	return (
		<>
		<div className="container-fluid">
			<div className="row">
		{store.characters.map((characters, index)=> {
			return (
					<div className="col-12 col-md-4" key= {index}>
					<div className="card m-4">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`} className="card-img-top" alt="..."/>
							<div className="card-body">
						 		 <h4 className="card-title mb-4">{characters.name}</h4>
								  <Link to={`/character/${characters.uid}`} className="btn btn-dark mx-2">More info</Link>
						  		<button className="btn btn-danger mx-2"><i className="fas fa-heart"></i></button>
					  		</div>
			 		</div>
					</div>
					)}
		)
		}
		</div>
		</div>
		</>
	);
};
