import React from 'react';

export const App = (): JSX.Element => {
	// Set the brew ratio - 60g/L
	const brewRatio = {
		coffee: 15,
		water: 250,
	};

	// Set how much coffee is being used
	// TODO: Update this value with user input
	const coffeeWeight = 30;

	// Set the brewWeight using the brewRatio
	const brewWeight = Math.floor((brewRatio.water / brewRatio.coffee) * coffeeWeight);

	// Set bloom water to two times the coffeeWeight
	const bloomWater = coffeeWeight * 2;

	// Set the 60% pour value
	const sixtyPercentPour = (60 / 100) * brewWeight;

	// Set what will be the final pour amount
	const finalPour = brewWeight - sixtyPercentPour;

	return (
		<div>
			<h1>James Hoffmann&apos;s Ultimate V60 Technique</h1>
		</div>
	);
};
