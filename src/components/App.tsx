import React, { useState } from 'react';
import { Bloom } from '../stages/Bloom';
import { FinalPour } from '../stages/FinalPour';
import { FinishingUp } from '../stages/FinishingUp';
import { Preparation } from '../stages/Preparation';
import { SixtyPercentPour } from '../stages/SixtyPercentPour';
import { CoffeeControl } from './CoffeeControl';
import { Intro } from './Intro';

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

// Set the brew ratio - 60g/L
const brewRatio: BrewRatio = {
	coffee: 15,
	water: 250,
};

// Set the default coffeeWeight
const defaultCoffeeWeight = 30;

export const App = (): JSX.Element => {
	// Set how much coffee is being used
	const [coffeeWeight, setCoffeeWeight] = useState(defaultCoffeeWeight);

	// Set the brewWeight using the brewRatio
	const [brewWeight, setBrewWeight] = useState(calcBrewWeight(brewRatio, coffeeWeight));

	// Set bloom water values
	const [bloom, setBloom] = useState(calcBloom(coffeeWeight));

	// Set the 60% of the total pour
	const [sixtyPercent, setSixtyPercent] = useState(calcSixtyPercent(brewWeight, bloom));

	// Set what will be the final pour amount
	const [finalPour, setFinalPour] = useState(calcFinalPour(brewWeight, sixtyPercent));

	// Set whether or not the current input is a valid number
	const [validNumber, setValidNumber] = useState(true);

	/**
	 * Updates all values when the coffee amount changes
	 *
	 * @param target the input containing how much coffee we want to brew with
	 */
	const handleCoffeeChange = (target: HTMLInputElement): void => {
		// Get the updated coffee value
		const updatedCoffeeValue = parseInt(target.value);

		const inRange = updatedCoffeeValue >= 6 && updatedCoffeeValue <= 60;

		if (!isNaN(updatedCoffeeValue) && inRange) {
			// Store the updated pour data
			const updatedBrewWeight = calcBrewWeight(brewRatio, updatedCoffeeValue);
			const updatedBloom = calcBloom(updatedCoffeeValue);
			const updatedSixtyPercent = calcSixtyPercent(updatedBrewWeight, updatedBloom);
			const updatedFinalPour = calcFinalPour(updatedBrewWeight, updatedSixtyPercent);

			// Update the pour related data
			setCoffeeWeight(updatedCoffeeValue);
			setBrewWeight(updatedBrewWeight);
			setBloom(updatedBloom);
			setSixtyPercent(updatedSixtyPercent);
			setFinalPour(updatedFinalPour);

			setValidNumber(true);
		} else {
			setValidNumber(false);
		}
	};

	/**
	 * Upon button click, find out the value and either step up or down the coffeeInput
	 *
	 * @param target The button clicked
	 */
	const handleCoffeeStep = (target: HTMLButtonElement): void => {
		const coffeeInput = document.querySelector('.coffee__input') as HTMLInputElement;

		const { value } = target;

		if (value === 'increase' && coffeeInput) {
			coffeeInput.stepUp();
		} else {
			coffeeInput.stepDown();
		}

		handleCoffeeChange(coffeeInput);
	};

	return (
		<div className="wrapper">
			<Intro />

			<CoffeeControl
				defaultCoffeeWeight={defaultCoffeeWeight}
				brewWeight={brewWeight}
				validNumber={validNumber}
				handleCoffeeChange={handleCoffeeChange}
				handleCoffeeStep={handleCoffeeStep}
			/>

			<Preparation coffeeWeight={coffeeWeight} />

			<Bloom bloom={bloom} />

			<SixtyPercentPour sixtyPercent={sixtyPercent} />

			<FinalPour finalPour={finalPour} brewWeight={brewWeight} />

			<FinishingUp />
		</div>
	);
};
