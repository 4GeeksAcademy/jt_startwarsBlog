import React from "react";
import "../../styles/home.css";

import { CharactersCards } from "../component/characterscards";
import { PlanetsCards } from "../component/planetscards";
import { VehiclesCards } from "../component/vehiclesscards";

export const Home = () => (
	<>
		<div className="text-center text-danger mt-5">
			<h1>Characters</h1>
			<CharactersCards />
		</div>
		<div className="text-center text-primary mt-5">
			<h1>Planets</h1>
			<PlanetsCards />
		</div>
		<div className="text-center text-success mt-5">
			<h1>Vehicles</h1>
			<VehiclesCards />
		</div>
	</>
	
);
