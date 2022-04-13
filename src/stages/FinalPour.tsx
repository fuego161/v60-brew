import React from 'react';

interface FinalPourProps {
	finalPour: number;
	brewWeight: number;
}

export const FinalPour = ({ finalPour, brewWeight }: FinalPourProps): JSX.Element => {
	return (
		<div className="stage">
			<h2 className="stage__title">Final Pour</h2>

			<p className="stage__time">Timer - 1:15</p>

			<ul className="stage__list">
				<li className="stage__item">Over the next 30 seconds, pour {finalPour}g of water.</li>
				<li className="stage__item">Your total brew weight should be {brewWeight}g</li>
			</ul>
		</div>
	);
};
