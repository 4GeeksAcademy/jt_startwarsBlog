import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const VehicleDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=> {
		actions.getVehicle(params.id)
	}, [])

	return (
		<div className="col-12">

			{
				store.planet ? <> 
				<div className="myCard card text-white bg-dark mb-3 mx-auto">
						<div className="row g-0">
							<div className="col-md-4 p-3">
								<img src="https://imagenes.20minutos.es/files/gallery_desktop_default_content/uploads/imagenes/2017/12/14/MF_over_Takodana_SWCT.png" className="detailed-img img-fluid rounded" alt="..."/>
							</div>
							<div className="col-md-8">
								<div className="card-body p-3">
									<h2 className="card-title ">{store.vehicle.name}</h2>
									<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam ipsum, rhoncus vel ligula et, eleifend malesuada purus. Duis nec nunc tempor, sollicitudin metus id, dignissim sapien. Pellentesque vitae vehicula dui, nec gravida dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
								</div>
							</div>
						</div>
						<div className="row mx-2 pt-2 border-top">
							<div className="col-md-12 col-lg-2">
								<h6>MODEL</h6>
								<p>{store.vehicle.model}</p>
							</div>
							<div className="col-md-12 col-lg-2">
								<h6>PASSENGERS</h6>
								<p>{store.vehicle.passengers}</p>
							</div>
							<div className="col-md-12 col-lg-2">
								<h6>MANUFACTURER</h6>
								<p>{store.vehicle.manufacturer}</p>
							</div>
							<div className="col-md-12 col-lg-2">
								<h6>CARGO</h6>
								<p>{store.vehicle.cargo_capacity}</p>
							</div>
							<div className="col-md-12 col-lg-2">
								<h6>CREW</h6>
								<p>{store.vehicle.crew}</p>
							</div>
							<div className="col-md-12 col-lg-2">
								<h6>FILMS</h6>
								<p>{store.vehicle.films}</p>
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