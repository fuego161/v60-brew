import React from 'react';

export const FinishingUp = (): JSX.Element => {
	return (
		<div className="stage">
			<h2 className="stage__title">Finishing Up</h2>

			<p className="stage__time">Timer - 1:45</p>

			<ul className="stage__list">
				<li className="stage__item">With a spoon, stir clockwise once, and once anticlockwise</li>
				<li className="stage__item">This knocks off grounds from side wall</li>
				<li className="stage__item stage__item--info">Allow the V60 to drain a little</li>
				<li className="stage__item">Give the V60 a gentle swirl</li>
				<li className="stage__item stage__item--info">This helps obtain a flat coffee bed at the bottom of the V60 for even an extraction</li>
				<li className="stage__item">Let brew drawdown</li>
				<li className="stage__item stage__item--info">The higher the temperature, the faster the drawdown</li>
				<li className="stage__item">Aim to have your drawdown completed by 3:30</li>
			</ul>
		</div>
	);
};
