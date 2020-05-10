import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFileAlt, faPaperPlane, faBars, faCode } from '@fortawesome/free-solid-svg-icons';
import { Translate, withLocalize } from "react-localize-redux";
import "./style.scss";

class navbar extends React.Component {
	render() {
		return (
			<>
				<div className="nav-container base no-print">
					<nav id="navbar" className="main-nav default">
						<div className="container ">
							<div className="row">
								<div className="mobile-menu-holder navbar-right">
									<button className="mobile-btn">
										<FontAwesomeIcon icon={faBars} size="2x"></FontAwesomeIcon>
									</button>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="col-sm-5 t-center">
									<ul className="menu first">
										<li><a className="scroll" href="#home"><Translate id="menu.home" /><FontAwesomeIcon icon={faHome} size="1x" fixedWidth={true} /></a></li>
										<li><a className="scroll" href="#about"><Translate id="menu.about" /><FontAwesomeIcon icon={faUser} size="1x" fixedWidth={true} /></a></li>
										<li><a className="scroll" href="#resume"><Translate id="menu.resume" /><FontAwesomeIcon icon={faFileAlt} size="1x" fixedWidth={true} /></a></li>
									</ul>
								</div>
								<div className="col-sm-2 pd-0 t-center">
									<div className="img-profile">
										<img src={process.env.PUBLIC_URL + "/assets/img/me.jpg"} alt="" />
									</div>
									<div className="name-profile">
										<h5><a className="scroll" href="#home"><Translate id="developer.name" /><span><Translate id="developer.cargo" /></span></a></h5>
									</div>
								</div>
								<div className="col-sm-5 t-center">
									<ul className="menu second">
										{/* <li><a className="scroll" href="#portfolio"><Translate id="menu.challenges" /><FontAwesomeIcon icon={faLightbulb} size="1x" fixedWidth={true} /></a></li> */}
										<li><a className="scroll" href="#skills"><Translate id="menu.skills" /><FontAwesomeIcon icon={faCode} size="1x" fixedWidth={true} /></a></li>
										<li><a className="scroll" href="mailto:avelinocarmanhanneto@gmail.com"><Translate id="menu.contact" /><FontAwesomeIcon icon={faPaperPlane} size="1x" fixedWidth={true} /></a></li>
									</ul>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</>
		)
	}
}

export default withLocalize(navbar);
