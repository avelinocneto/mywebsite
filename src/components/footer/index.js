import React from "react";
import "./style.scss";

export const footer = ({ id = "", className = "", children = "", style = [], applyContainerClass = true }) => (
	<footer id={id} className={className}>
		<div className={applyContainerClass ? "container" : ""}>
			<div className="row">
				<div className="col-md-12">
					{children}
				</div>
			</div>
		</div>
	</footer>
)