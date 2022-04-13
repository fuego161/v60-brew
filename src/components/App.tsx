import React, { useState } from 'react';
import { Bloom } from '../stages/Bloom';
import { FinalPour } from '../stages/FinalPour';
import { FinishingUp } from '../stages/FinishingUp';
import { Preparation } from '../stages/Preparation';
import { SixtyPercentPour } from '../stages/SixtyPercentPour';

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

			<SixtyPercentPour bloom={bloom} sixtyPercent={sixtyPercent} />

			<FinalPour finalPour={finalPour} brewWeight={brewWeight} />

			<FinishingUp />
		</div>
	);
};
