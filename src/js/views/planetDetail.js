import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.css";

export const PlanetDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=> {
		actions.getPlanet(params.id)
	}, [])

	return (
		<div className="col-12">

			{
				store.planet ? <> 
				<div className="myCard card text-white bg-dark mb-3 mx-auto">
						<div className="row g-0">
							<div className="col-md-4 p-3">
								<img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="detailed-img img-fluid rounded" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body p-3">
									<h2 className="card-title ">{store.planet.name}</h2>
									<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam ipsum, rhoncus vel ligula et, eleifend malesuada purus. Duis nec nunc tempor, sollicitudin metus id, dignissim sapien. Pellentesque vitae vehicula dui, nec gravida dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur orci orci, convallis quis odio in, efficitur posuere lacus.</p>
								</div>
							</div>
						</div>
						<div className="row mx-2 pt-2 border-top">
							<div className="col-2">
								<h6>CLIMATE</h6>
								<p>{store.planet.climate}</p>
							</div>
							<div className="col-2">
								<h6>GRAVITY</h6>
								<p>{store.planet.gravity}</p>
							</div>
							<div className="col-2">
								<h6>POPULATION</h6>
								<p>{store.planet.population}</p>
							</div>
							<div className="col-2">
								<h6>TERRAIN</h6>
								<p>{store.planet.terrain}</p>
							</div>
							<div className="col-2">
								<h6>WATER</h6>
								<p>{store.planet.surface_water}</p>
							</div>
							<div className="col-2">
								<h6>FILMS</h6>
								<p>{store.character.homeworld}</p>
							</div>
						</div>
					</div>
				</>
				: 
				
				<h3>Cargando...</h3>
		
			}

			
		</div>
	);

    };	