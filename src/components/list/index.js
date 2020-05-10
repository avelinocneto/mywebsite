import React from 'react';

export const list = ({ id = "", className = "", children = "" }) => (
	<ul id={id} className={className}>
		{children}
	</ul>
)