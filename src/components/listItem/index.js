import React from 'react';

export const listItem = ({ id = "", className = "", children = "" }) => (
	<li id={id} className={className}>
		{children}
	</li>
)