import React from 'react';
import * as components from "../blockTitle";

export const block = ({ className = "", children = "", sequentialClass = "", grayBackgroundNumber = "", title = "" }) => (
	<div className={`block-${className} ${sequentialClass} bg-grey-${grayBackgroundNumber}`}>
		<components.blockTitle title={title}></components.blockTitle>
		{children}
	</div>
);