import React from 'react';

interface CoffeeControlProps {
	defaultCoffeeWeight: number;
	brewWeight: number;
	handleCoffeeChange: (target: HTMLInputElement) => void;
}

export const CoffeeControl = ({ defaultCoffeeWeight, brewWeight, handleCoffeeChange }: CoffeeControlProps): JSX.Element => {
	return (
		<form className="coffee">
			<div className="coffee__selector">
				<label className="coffee__label" htmlFor="coffee">
					Coffee
				</label>

				<div className="coffee__controls">
					<input
						id="coffee"
						className="coffee__input"
						name="coffee"
						type="number"
						min="6"
						max="60"
						defaultValue={defaultCoffeeWeight}
						onChange={(e) => handleCoffeeChange(e.currentTarget)}
					/>
					g
				</div>
			</div>

			<div className="coffee__output">
				Your total brew weight will be <strong>{brewWeight}g</strong>
			</div>
		</form>
	);
};
