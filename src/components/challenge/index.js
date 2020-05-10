import React from 'react';

export const challenge = ({ challenges = [] }) => (
	challenges.map(challenge =>
		(
			<div class="col-md-4 col-sm-4">
				<div class="post latest">
					<div class="post-media">
						<img src={process.env.PUBLIC_URL + "/assets/img/challenges/" + challenge.imageUrl} alt="" />
					</div>
					<div class="post-details latest pb-20">
						<h4 class="uppercase pt-15 pb-15"><a href={challenge.url}>{challenge.title}</a></h4>
						<div class="post-meta t-center pt-10 pb-10">
							<ul class="clearfix">
								<li class="date">{challenge.finishDate}</li>
							</ul>
						</div>
						<p class="pt-15 pb-20">{challenge.description}</p>
						<a class="more" href={challenge.url}>read more <span>→</span> </a>
					</div>
				</div>
			</div>
		)
	)
)