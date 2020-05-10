import React from "react";
import "./style.scss";


/*
const HeaderSection = ({ title = "", subtitle = "", className = "" }) => (
  <header className={`header-section ${className}`}>
    <TitleCubo content={title} />
    <SubtitleCubo content={subtitle} />
  </header>
)
*/

export const section = ({ id = "", className = "", children = "", style = [], content = { innerDivClassName: "", applyContainerClass: true }, title = { description: "", className: "" } }) => (
	<section id={id} className={className} style={style}>
		<div className={content.innerDivClassName + " " + content.applyContainerClass ? "container" : ""}>
			<div className="row">
				<div className="col-md-12">
					{
						title.description !== "" &&
						<div className={"block-title " + title.className}>
							<h2 className="title">{title.description}</h2>
						</div>
					}
				</div>
			</div>
			{children}
		</div>
	</section >
)