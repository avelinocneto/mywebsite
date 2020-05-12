import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Translate, withLocalize } from "react-localize-redux";

const printbutton = ({ id, label }) => (
	<>
		<div id="myMm" style={{ height: "1mm" }} ></div>
		<a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/assets/pdf/AvelinoCNeto_CurriculumVitae.pdf"}>
			<button className="but brd ico white mt-30 ml-10 no-print"
				onClick={() => {



				}}
			>
				{label}
				<FontAwesomeIcon icon={faArrowCircleDown}></FontAwesomeIcon>
				<Translate id='label.downloadCV' />
			</button>
		</a>
	</>);
export default withLocalize(printbutton);
