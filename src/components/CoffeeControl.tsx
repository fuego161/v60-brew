import React from 'react';

interface CoffeeControlProps {
	defaultCoffeeWeight: number;
	handleCoffeeChange: (target: HTMLInputElement) => void;
}

export const CoffeeControl = ({ defaultCoffeeWeight, handleCoffeeChange }: CoffeeControlProps): JSX.Element => {
	return (
		<label htmlFor="coffee">
			Coffee (g)
			<input
				id="coffee"
				name="coffee"
				type="number"
				min="6"
				max="60"
				defaultValue={defaultCoffeeWeight}
				onChange={(e) => handleCoffeeChange(e.currentTarget)}
			/>
		</label>
	);
};
