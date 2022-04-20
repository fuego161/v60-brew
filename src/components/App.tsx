import React, { useState } from 'react';
import { calcBloom, calcBrewWeight, calcFinalPour, calcSixtyPercent, createCookie, readCookie } from '../utils';
import { CoffeeControl } from './CoffeeControl';
import { Intro } from './Intro';
import { Stages } from './Stages';

// Set the brew ratio - 60g/L
const brewRatio: BrewRatio = {
	coffee: 15,
	water: 250,
};

// Retrieve coffee value cookie if present
const coffeeCookie = readCookie('v60-grams');

// Set the default coffeeWeight
const defaultCoffeeWeight = coffeeCookie ? parseInt(coffeeCookie) : 30;

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

			createCookie('v60-grams', target.value);
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

			<Stages coffeeWeight={coffeeWeight} bloom={bloom} sixtyPercent={sixtyPercent} finalPour={finalPour} brewWeight={brewWeight} />
		</div>
	);
};
