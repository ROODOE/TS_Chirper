import React, { useState, useEffect } from 'react';
import NewChirp from './NewChirp';
import { Link } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';

const Chirps = ({ handle, message, uuidv4 }) => {
	const [chirps, setChirps] = useState([{ "handle": "@SteveJobs", "message": "Hello" }, { "handle": "@SteveJobs", "message": "Hello" }, { "handle": "@SteveJobs", "message": "Hello" }]);


	return (

		<>
			<div className="main-container">

				<div id="static-chirp-container">
					{chirps.map(chirp => (
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{chirp.handle}</h5>
								<h6 className="card-subtitle mb-2 text-muted">{chirp.message}</h6>
								<a href="#" className="card-link">Card link</a>
								<a href="#" className="card-link">Another link</a>
							</div>
						</div>
					))};
				</div>
				<div id="new-chirp-container">
					<NewChirp />
				</div>
			</div>
		</>
	)


}






export default Chirps;