import React, { useState } from 'react';
import { Bloom } from '../stages/Bloom';
import { Preparation } from '../stages/Preparation';

const calcBrewWeight = (brewRatio: BrewRatio, coffeeWeight: number): number => {
	return Math.floor((brewRatio.water / brewRatio.coffee) * coffeeWeight);
};

const calcBloom = (coffeeWeight: number): Bloom => {
	return {
		recommended: coffeeWeight * 2,
		maximum: coffeeWeight * 3,
	};
};

const calcSixtyPercent = (brewWeight: number, bloom: Bloom): SixtyPercent => {
	const sixtyPercentTotal = Math.floor((60 / 100) * brewWeight);

	return {
		total: sixtyPercentTotal,
		pour: sixtyPercentTotal - bloom.recommended,
	};
};

const calcFinalPour = (brewWeight: number, sixtyPercent: SixtyPercent): number => {
	return brewWeight - sixtyPercent.total;
};

export const App = (): JSX.Element => {
	// Set the brew ratio - 60g/L
	const brewRatio: BrewRatio = {
		coffee: 15,
		water: 250,
	};

	// Set the default coffeeWeight
	const defaultCoffeeWeight = 30;

	// Set how much coffee is being used
	// TODO: Update this value with user input
	const [coffeeWeight, setCoffeeWeight] = useState(defaultCoffeeWeight);

	// Set the brewWeight using the brewRatio
	const [brewWeight, setBrewWeight] = useState(calcBrewWeight(brewRatio, coffeeWeight));

	// Set bloom water values
	const [bloom, setBloom] = useState(calcBloom(coffeeWeight));

	// Set the 60% of the total pour
	const [sixtyPercent, setSixtyPercent] = useState(calcSixtyPercent(brewWeight, bloom));

	// Set what will be the final pour amount
	const [finalPour, setFinalPour] = useState(calcFinalPour(brewWeight, sixtyPercent));

	return (
		<div>
			<h1>James Hoffmann&apos;s Ultimate V60 Technique</h1>

			<Preparation coffeeWeight={coffeeWeight} />

			<Bloom bloom={bloom} />

			<div className="stage">
				<h2 className="stage__title">60% Pour</h2>

				<p className="stage__time">Timer - 0:45</p>

				<ul className="stage__list">
					<li className="stage__item">
						Add water, aiming for 60% of total brew weight. Since you already added bloom water ({bloom.recommended}g), add{' '}
						{sixtyPercent.pour}g in 30s
					</li>
					<li className="stage__item stage__item--info">This phase is critical!</li>
				</ul>
			</div>

			<div className="stage">
				<h2 className="stage__title">Final Pour</h2>

				<p className="stage__time">Timer - 1:15</p>

				<ul className="stage__list">
					<li className="stage__item">Over the next 30 seconds, pour {finalPour}g of water.</li>
					<li className="stage__item">Your total brew weight should be {brewWeight}g</li>
				</ul>
			</div>

			<div className="stage">
				<h2 className="stage__title">Finishing Up</h2>

				<p className="stage__time">Timer - 1:45</p>

				<ul className="stage__list">
					<li className="stage__item">With a spoon, stir clockwise once, and once anticlockwise</li>
					<li className="stage__item">This knocks off grounds from side wall</li>
					<li className="stage__item stage__item--info">Allow the V60 to drain a little</li>
					<li className="stage__item">Give the V60 a gentle swirl</li>
					<li className="stage__item stage__item--info">
						This helps obtain a flat coffee bed at the bottom of the V60 for even an extraction
					</li>
					<li className="stage__item">Let brew drawdown</li>
					<li className="stage__item stage__item--info">The higher the temperature, the faster the drawdown</li>
					<li className="stage__item">Aim to have your drawdown completed by 3:30</li>
				</ul>
			</div>
		</div>
	);
};
