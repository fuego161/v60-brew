import React from 'react';

interface BrewRatio {
	coffee: number;
	water: number;
}

interface Bloom {
	recommended: number;
	maximum: number;
}

export const App = (): JSX.Element => {
	// Set the brew ratio - 60g/L
	const brewRatio: BrewRatio = {
		coffee: 15,
		water: 250,
	};

	// Set how much coffee is being used
	// TODO: Update this value with user input
	const coffeeWeight = 30;

	// Set the brewWeight using the brewRatio
	const brewWeight = Math.floor((brewRatio.water / brewRatio.coffee) * coffeeWeight);

	// Set bloom water values
	const bloom: Bloom = {
		recommended: coffeeWeight * 2,
		maximum: coffeeWeight * 3,
	};

	// Set the 60% of the total pour
	const sixtyPercentTotal = Math.floor((60 / 100) * brewWeight);
	// Set how much will be poured during the 60% stage
	const sixtyPercentPour = sixtyPercentTotal - bloom.recommended;

	// Set what will be the final pour amount
	const finalPour = brewWeight - sixtyPercentTotal;

	return (
		<div>
			<h1>James Hoffmann&apos;s Ultimate V60 Technique</h1>

			<div className="stage">
				<h2 className="stage__title">Preparation</h2>

				<ul className="stage__list">
					<li className="stage__item">Grind {coffeeWeight}g of coffee</li>
					<li className="stage__item">Rinse your paper filter with water just off the boil</li>
					<li className="stage__item stage__item--info">This removes any paper taste and preheats the brewer</li>
					<li className="stage__item">Add your coffee grounds to the V60</li>
					<li className="stage__item">Create a well in the middle of the grounds</li>
					<li className="stage__item stage__item--info">This helps to evenly saturate all the grounds during the blooming phase</li>
					<li className="stage__item">Start timer</li>
				</ul>
			</div>

			<div className="stage">
				<h2 className="stage__title">Bloom</h2>

				<p className="stage__time">Timer - 0:00</p>

				<ul className="stage__list">
					<li className="stage__item">Add {bloom.recommended}g of bloom water</li>
					<li className="stage__item stage__item--info">Do not pour more than three times the amount of coffee used ({bloom.maximum}g)</li>
					<li className="stage__item">Swirl the coffee slurry until evenly mixed</li>
					<li className="stage__item stage__item--info">
						The aim is to wet all the coffee grounds by evenly mixing bloom water and coffee
					</li>
					<li className="stage__item">Bloom for up to 45s </li>
					<li className="stage__item stage__item--info">This allows CO2 to escape which will improve extraction</li>
				</ul>
			</div>

			<div className="stage">
				<h2 className="stage__title">60% Pour</h2>

				<p className="stage__time">Timer - 0:45</p>

				<ul className="stage__list">
					<li className="stage__item">
						Add water, aiming for 60% of total brew weight. Since you already added bloom water ({bloom.recommended}g), add{' '}
						{sixtyPercentPour}g in 30s
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
