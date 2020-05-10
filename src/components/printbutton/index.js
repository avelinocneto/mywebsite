import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Translate, withLocalize } from "react-localize-redux";

const pxToMm = (px) => {
	return Math.floor(px / document.getElementById('myMm').offsetHeight);
};

const mmToPx = (mm) => {
	return document.getElementById('myMm').offsetHeight * mm;
};

const range = (start, end) => {
	return Array(end - start).join(0).split(0).map(function (val, id) { return id + start });
};

const printbutton = ({ id, label }) => (
	<>
		<div id="myMm" style={{ height: "1mm" }} ></div>
		<button className="but brd ico white mt-30 ml-10 no-print"
			onClick={() => {



			}}
		>
			{label}
			<FontAwesomeIcon icon={faArrowCircleDown}></FontAwesomeIcon>
			<Translate id='label.downloadCV' />
		</button>
	</>);
export default withLocalize(printbutton);
