import React from 'react';
import NewChirp from './NewChirp';

const Chirps = () => {

	return (

		<>
			<div className="main-container">

				<div id="static-chirp-container">
					<h1>Wassup</h1>
				</div>
				<div id="new-chirp-container">
					<NewChirp />
				</div>
			</div>
		</>
	)


}






export default Chirps;