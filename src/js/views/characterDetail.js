import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const CharacterDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=> {
		actions.getCharacter(params.id)
	})

	return (
		<div className="col-12">

			{
				store.character ? <h1>Nombre: {store.character.name}</h1> : <h3>Cargando...</h3>
			}

			<h1>Detalle del personaje: {params.id}</h1>
		</div>
	);

    
    };