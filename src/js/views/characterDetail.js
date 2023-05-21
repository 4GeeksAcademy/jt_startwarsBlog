import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const CharacterDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=> {
		actions.getCharacter(params.id)
	}, [])

	return (
		<div className="col-12">

			{
				store.character ? 
				<>
				
					<div className="card mx-auto">
						<div className="row g-0">
							<div className="col-md-4">
								<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-hogwarts-6401ff12964ad.jpg?crop=0.624xw:0.946xh;0.117xw,0.0543xh&resize=640:*" className="img-fluid rounded-start" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h3 className="card-title">{store.character.name}</h3>
									<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-2">
								<h1>Hola</h1>
							</div>
							<div className="col-2">
								<h1>Hola</h1>
								<p>esto es un p</p>
							</div>
							<div className="col-2">
								<h1>Hola</h1>
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