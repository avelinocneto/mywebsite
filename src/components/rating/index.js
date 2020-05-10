import React from 'react';

export const rating = ({ className = "", items = [{ title: "", rating: 0 }] }) => (
	<ul id="languageskills" className={"skill-list clearfix " + className}>
		{
			items.map(item => (
				<li key={item.title}>
					<h4>{item.title} {item.ratingDesc}</h4>
					<div className="rating">
						{[...Array(item.rating)].map((n, i) =>
							<span key={i}></span>
						)}
						{[...Array(5 - item.rating)].map((n, i) =>
							<span key={i} className="transparent"></span>
						)}
					</div>
				</li>
			))
		}
	</ul>
);
