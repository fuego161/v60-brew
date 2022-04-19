import React from 'react';

interface CoffeeControlProps {
	defaultCoffeeWeight: number;
	brewWeight: number;
	handleCoffeeChange: (target: HTMLInputElement) => void;
}

export const CoffeeControl = ({ defaultCoffeeWeight, brewWeight, handleCoffeeChange }: CoffeeControlProps): JSX.Element => {
	return (
		<form className="coffeecontrol">
			<div className="coffeecontrol__selector">
				<label className="coffeecontrol__label" htmlFor="coffee">
					Coffee
				</label>
				<input
					id="coffee"
					className="coffeecontrol__input"
					name="coffee"
					type="number"
					min="6"
					max="60"
					defaultValue={defaultCoffeeWeight}
					onChange={(e) => handleCoffeeChange(e.currentTarget)}
				/>
				g
			</div>

			<div className="coffeecontrol__output">Your total brew weight will be {brewWeight}g</div>
		</form>
	);
};
