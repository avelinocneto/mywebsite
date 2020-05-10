import React from 'react';

export const blockTitle = ({ className = "", title = "" }) => (
	title.length > 0 &&
	<div className={`block-title ` + className}>
		<h2 className="title">{title}</h2>
	</div>
)