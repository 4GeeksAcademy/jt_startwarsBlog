import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const PlanetDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=> {
		actions.getPlanet(params.id)
	})

	return (
		<div className="col-12">

			{
				store.planet ? <h1>Nombre: {store.planet.name}</h1> : <h3>Cargando...</h3>
			}

			<h1>Detalle del personaje: {params.id}</h1>
		</div>
	);

    
    };	