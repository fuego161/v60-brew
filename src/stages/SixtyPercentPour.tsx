import React from 'react';

interface SixtyPercentPourProps {
	bloom: Bloom;
	sixtyPercent: SixtyPercent;
}

export const SixtyPercentPour = ({ bloom, sixtyPercent }: SixtyPercentPourProps): JSX.Element => {
	return (
		<div className="stage">
			<h2 className="stage__title">60% Pour</h2>

			<p className="stage__time">Timer - 0:45</p>

			<ul className="stage__list">
				<li className="stage__item">
					Add water, aiming for 60% of total brew weight (<strong>{sixtyPercent.total}g</strong>). Since you already added bloom water (
					<strong>{bloom.recommended}g</strong>), add <strong>{sixtyPercent.pour}g</strong> in 30s
				</li>
				<li className="stage__item stage__item--info">This phase is critical!</li>
			</ul>
		</div>
	);
};
