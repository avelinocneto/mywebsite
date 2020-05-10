import React from 'react';
import 'flag-icon-css/sass/flag-icon.scss';

const onSelectFlag = (countryCode) => {
	//console.log(countryCode)
}

export const languageToggle = () => {
	return (
		<>

			<div className="d-flex" style={{ marginTop: 10 }}>
				<ul className="list-group list-group-horizontal mx-auto justify-content-center">
					{/* <li className="list-group-item" onClick={() => onSelectFlag("en")}>
						<span className="flag-icon flag-icon-us"></span> English
					</li> */}
					<li className="list-group-item" onClick={() => onSelectFlag("br")}>
						<span className="flag-icon flag-icon-br"></span> Português
					</li>
				</ul>
			</div>
		</>

	);
};