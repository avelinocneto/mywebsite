import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Sticky from 'react-stickynode';
import * as components from "../../components";
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMicrophone, faGraduationCap, faBriefcase, faMicroscope, faUserAlt, faCheck, faCogs } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { withLocalize, Translate, LocalizeProvider } from "react-localize-redux";
import globalTranslations from "../../translations/globalTranslations.json";
import data from '../../translations/data';

class Main extends React.Component {

	render() {
		return (
			<>
				<LocalizeProvider initialize={{
					languages: [
						{ name: "English", code: "en" },
						{ name: "Português", code: "pt" }
					],
					translation: globalTranslations,
					options: {
						defaultLanguage: "pt",
						renderToStaticMarkup: renderToStaticMarkup
					}
				}}>
					<components.preloader></components.preloader>

					<components.section
						id="home"
						className="home"
						content={{ innerDivClassName: "block-content clearfix" }}
						style={{
							backgroundImage: "url('" + process.env.PUBLIC_URL + "/assets/img/background.jpg')",
							backgroundRepeat: false,
							backgroundSize: 'cover',
							backgroundPositionY: "center"
						}}>
						<components.block className="teaser block-background-image medium">
							<div className="container">
								<div className="row">
									<div className="col-sm-12 col-md-12">
										<h1 className="white mt-40">Avelino&nbsp;Carmanhan&nbsp;Neto</h1>
										<h3 className="mt-20 white mb-30"><Translate id='developer.cargo' /></h3>
									</div>
									<components.printbutton id="printable" label='' />
									{/* <Pdf targetRef={ref} filename="AvelinoCNeto_SeniorDeveloper.pdf">
										{
											({ toPdf }) =>
												<button className="but brd ico white mt-30" onClick={toPdf}>
													<FontAwesomeIcon icon={faArrowCircleDown}></FontAwesomeIcon>
													<Translate id='label.downloadCV' />
												</button>
										}
									</Pdf> */}
								</div>
							</div>
						</components.block>
					</components.section>

					<Sticky top='#navbar' bottomBoundary='#content'>
						<components.navbar></components.navbar>
					</Sticky>
					<div id='printable'>
						<components.section
							id="about"
							className="resume pt-100"
							title={{ description: "", className: "" }}
							content={{ innerDivClassName: "container" }}
						>
							<div className="row">

								{/* <div className="col-md-8 mb-30 ">
								<div className="inner-resume-boxe bg-grey-1">
									<div className="block-icon"><FontAwesomeIcon icon={faQuestion} size="2x"></FontAwesomeIcon></div>
									<div className="block-title">
										<h3 className="title medium"><Translate id='label.whoIAmTitle' /></h3>
									</div>
									<div className="mt-40">
										<h5 className="lead mt-40"><Translate id='developer.whoIAmTitle' /></h5>
										<p className="mt-20">
											<Translate id='developer.whoIAmDescription' />
										</p>
										<button className="but brd ico white mt-30">
											<FontAwesomeIcon icon={faArrowCircleDown}></FontAwesomeIcon>
											<Translate id='label.downloadCV' />
										</button>
									</div>
								</div>
							</div> */}
								<div className="col-md-12 mb-30 ">
									<div className="inner-resume-boxe bg-grey-2">
										<div className="block-icon"><FontAwesomeIcon icon={faUserAlt} size="2x"></FontAwesomeIcon></div>
										<div className="block-title">
											<h3 className="title medium"><Translate id='label.personalInfo' /></h3>
										</div>
										<div className="mt-40">
											<ul className="mt-40 info">
												<li><Translate id='developer.whoIAmDescription' /></li>
												<li><Translate id='developer.whoIAmDescription2' /></li>
												<br />
												<li><span className="bold"><Translate id='label.birthdate' /></span> <Translate id='developer.birthDate' /></li>
												<li><span className="bold"><Translate id='label.nacionality' /></span> <Translate id='developer.nacionality' /></li>
												<li><span className="bold"><Translate id='label.location' /></span> <Translate id='developer.location' /></li>
												<br />
												<li><span className="bold"><Translate id='label.email' /></span> <Translate id='developer.email' /></li>
												<li><span className="bold"><Translate id='label.skype' /></span> <Translate id='developer.skype' /> </li>
												<li id="freela"><span className="bold"><Translate id='label.freela' /></span> <Translate id='developer.freelancerStatus' /></li>
												{
													data.social.filter(function (item, index, arr) { return item.name.toLowerCase() !== 'skype'; }).map((social, i) =>
														<li key={i} className="socialPrintables"><span className="bold">{social.name}: </span><span>{social.url}</span></li>
													)
												}
											</ul>
											<ul className="mt-30 socials">
												{
													data.social.map((social, i) =>
														<li key={i}><a href={social.url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={social.icon} size="2x"></FontAwesomeIcon></a></li>
													)
												}
											</ul>
											<br />
										</div>
									</div>
								</div>
								<div className="col-md-6" style={{ display: 'none' }}>
									<div className="block-contact" id="contact">
										<div id="map1">
											<div className="contact-overlay bg-grey-dark">
												<div className="block-title">
													<h2 className="title white"><Translate id='label.sendamessage' /></h2>
												</div>
												<div className="block-form mt-20">
													<form className="contact-form clearfix" method="post" action="send.php">
														<input type="text" placeholder="Nome *" defaultValue="" id="name" name="name" />
														<input type="text" placeholder="Email *" defaultValue="" id="email" name="email" />
														<input type="text" placeholder="Assunto" defaultValue="" id="subject" name="subject" />
														<textarea name="message" placeholder="Mensagem *" id="message" cols="45" rows="10"></textarea>
														<input type="submit" value="Enviar Mensagem" className="but opc white submit" />
													</form>
													<div id="success"><h2>Your message has been sent. Thank you!</h2></div>
													<div id="error"><h2>Sorry your message can not be sent.</h2></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</components.section>
						<components.section
							id="resume"
							className="resume "
						>
							<div className="row">
								<div id="expertise" className="col-md-12 mb-30">
									<div className="inner-resume-boxe">
										<div className="block-icon"><FontAwesomeIcon icon={faBriefcase} size="2x"></FontAwesomeIcon></div>
										<div className="block-title">
											<h3 className="title medium"><Translate id='label.expertise' /></h3>
										</div>
										<div className="timeline mt-40">
											{
												data.expertise.map((expertise, i) =>
													<div className="exp" key={i}>
														<div className="hgroup mb-5">
															<h4 style={{ fontWeight: "bold" }}>{expertise.cargo}</h4>
															<h5 style={{ color: "#a1a1a1" }}>{expertise.company}</h5>
															<h6>{expertise.startDate} – {expertise.endDate.length > 0 ? expertise.endDate : <span className="current">Presente</span>}</h6>
														</div>
														<p style={{ textAlign: 'justify' }}>{expertise.description}</p>
													</div>
												)
											}
										</div>
									</div>
								</div>
								<div id="graduation" className="col-md-12 mb-30">
									<div className="inner-resume-boxe">
										<div className="block-icon"><FontAwesomeIcon icon={faGraduationCap} size="2x"></FontAwesomeIcon></div>
										<div className="block-title">
											<h3 className="title medium"><Translate id='label.education' /></h3>
										</div>
										<div className="timeline mt-40">
											{
												data.education.map((education, i) =>
													<div className="edu" key={i}>
														<div className="hgroup mb-5">
															<h4 style={{ fontWeight: "bold" }}>{education.course}</h4>
															<h5 style={{ color: "#a1a1a1" }}>{education.institute}</h5>
															<h6>{education.startDate} – {education.endDate}</h6>
														</div>
														<p>{education.description}</p>
													</div>
												)
											}
										</div>
									</div>
								</div>
								<div id="languages" className="col-md-12 mb-30">
									<div className="inner-resume-boxe">
										<div className="block-icon"><FontAwesomeIcon icon={faMicrophone} size="2x"></FontAwesomeIcon></div>
										<div className="block-title">
											<h3 className="title medium"><Translate id='label.languages' /></h3>
										</div>
										<div className="skills mt-40 ">
											<components.rating items={data.languages}></components.rating>
										</div>
									</div>
								</div>
								<div id="skills" className="col-md-12 mb-30">
									<div className="inner-resume-boxe">
										<div className="block-icon"><FontAwesomeIcon icon={faCogs} size="2x"></FontAwesomeIcon></div>
										<div className="block-title">
											<h3 className="title medium"><Translate id='label.skills' /></h3>
										</div>
										<div className="sk-list mt-40 ">
											<ul>
												{
													data.skills.map((skill, i) =>
														<li key={i}>
															<span>
																{typeof (skill) !== "string" &&
																	<FontAwesomeIcon icon={skill} size="1x"></FontAwesomeIcon>
																}
																{typeof (skill) === "string" &&
																	<img style={{ width: 32, filter: "grayscale(100%)", WebkitFilter: "grayscale(100%)" }} src={process.env.PUBLIC_URL + "/assets/icon/" + skill + ".png"} alt={skill} />
																}
															</span>

														</li>
													)
												}
											</ul>

										</div>
										<div className="mt-40">
											<span className="bold">Soft Skills: </span><br />
											<ul>
												{
													data.softSkills.map((skill, i) =>
														<li key={"soft" + i}>
															<FontAwesomeIcon icon={faCheck} color="#777777" size="1x"></FontAwesomeIcon>&nbsp;<span>{skill}</span>
														</li>
													)
												}
											</ul>

										</div>
									</div>
								</div>
								<div id="interests" className="col-md-12 mb-30">
									<div className="inner-resume-boxe">
										<div className="block-icon"><FontAwesomeIcon icon={faMicroscope} size="2x"></FontAwesomeIcon></div>
										<div className="block-title">
											<h3 className="title medium"><Translate id='label.interests' /></h3>
										</div>
										<div className="hb-list mt-40 ">
											<ul>
												{
													data.interests.map((interest, i) =>
														<li key={i}>
															<span><FontAwesomeIcon icon={interest.icon} size="1x"></FontAwesomeIcon></span>
															<h6>{interest.name}</h6>
														</li>
													)
												}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</components.section>
						{
							data.challenges.length > 0 &&
							<components.section
								id="portfolio"
								className="blog pt-100"
								title={{ description: "Challenge Accepted!", className: "mb-60" }}
								innerDivClassName="block-content"
							>

								<div className="row">
									<div className="block-posts">
										<components.challenge list={data.challenges}></components.challenge>
									</div>
								</div>
								{/* <div className="row">
								<div className="col-sm-12 t-center">
									<a className="but brd  white mt-80 mb-80 " href="blog.html">View All Challenges</a>
								</div>
							</div>*/}
							</components.section>
						}
						{/* <components.section
						id="contact"
						className="contact pt-100"
						title={{ description: "" }}
					>
						<div className="block-contact">
							<div id="map">
								<div className="contact-overlay col-md-6 bg-grey-dark">
									<div className="block-title mb-60">
										<h2 className="title white">Send a Message</h2>
									</div>
									<div className="block-form">
										<form className="contact-form clearfix" method="post" action="send.php">
											<input type="text" placeholder="Name *" defaultValue="" id="name" name="name" />
											<input type="text" placeholder="Email *" defaultValue="" id="email" name="email" />
											<input type="text" placeholder="Subject" defaultValue="" id="subject" name="subject" />
											<textarea name="message" placeholder="Message *" id="message" cols="45" rows="10"></textarea>
											<input type="submit" value="Send Message" className="but opc white submit" />
										</form>
										<div id="success"><h2>Your message has been sent. Thank you!</h2></div>
										<div id="error"><h2>Sorry your message can not be sent.</h2></div>
									</div>
								</div>
							</div>
						</div>
					</components.section> */}
						<components.footer
							className="footer t-center pt-10 pb-20"
						>
							<hr />
							<components.languageToggle></components.languageToggle>
							<p className="pt-20">© {new Date().getFullYear()} all rights reserved. Made with <FontAwesomeIcon icon={faHeart} color="#FF0000"></FontAwesomeIcon> using <FontAwesomeIcon icon={faReact} color="#61DAFB"></FontAwesomeIcon>.</p>
						</components.footer>
					</div>
				</LocalizeProvider>
			</>
		)
	}
}

export default withLocalize(Main);
