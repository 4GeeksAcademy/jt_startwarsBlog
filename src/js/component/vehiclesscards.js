import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";


export const VehiclesCards = () => {
	const {store} = useContext(Context)
	return (
		<>
		<div className="container-fluid">
			<div className="row">
			<div className="scrollmenu">
		{store.vehicles.map((vehicles, index)=> {
			return (
					<div className="card m-2 col-12 col-md-4 col-lg-3 col-xl-2" key= {index}>
						<img src="https://imagenes.20minutos.es/files/gallery_desktop_default_content/uploads/imagenes/2017/12/14/MF_over_Takodana_SWCT.png" className="card-img-top" alt="..."/>
							<div className="card-body">
						 		<h4 className="card-title mb-4">{vehicles.name}</h4>
								<Link to="/" className="btn btn-dark mx-2">More info</Link>
						  		<button className="btn btn-danger mx-2"><i className="fas fa-heart"></i></button>
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
