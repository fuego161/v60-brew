import React from 'react';

interface BloomProps {
	bloom: Bloom;
}

export const Bloom = ({ bloom }: BloomProps): JSX.Element => {
	return (
		<div className="stage">
			<h2 className="stage__title">Bloom</h2>

			<p className="stage__time">Timer - 0:00</p>

			<ul className="stage__list">
				<li className="stage__item">
					Add <strong>{bloom.recommended}g</strong> of bloom water
				</li>
				<li className="stage__item stage__item--info">
					Do not pour more than three times the amount of coffee used (<strong>{bloom.maximum}g</strong>)
				</li>
				<li className="stage__item">Swirl the coffee slurry until evenly mixed</li>
				<li className="stage__item stage__item--info">The aim is to wet all the coffee grounds by evenly mixing bloom water and coffee</li>
				<li className="stage__item">Bloom for up to 45s </li>
				<li className="stage__item stage__item--info">This allows CO2 to escape which will improve extraction</li>
			</ul>
		</div>
	);
};
