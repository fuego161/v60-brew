import React from 'react';

interface CoffeeControlProps {
	defaultCoffeeWeight: number;
	brewWeight: number;
	handleCoffeeChange: (target: HTMLInputElement) => void;
	handleCoffeeStep: (target: HTMLButtonElement) => void;
}

export const CoffeeControl = ({ defaultCoffeeWeight, brewWeight, handleCoffeeChange, handleCoffeeStep }: CoffeeControlProps): JSX.Element => {
	return (
		<div className="coffee">
			<div className="coffee__selector">
				<label className="coffee__label" htmlFor="coffee">
					Coffee Grams
				</label>

				<div className="coffee__controls">
					<button
						id="coffee-decrease"
						className="coffee__btn"
						name="coffee-decrease"
						value="decrease"
						onClick={(e) => handleCoffeeStep(e.currentTarget)}
					>
						<svg className="coffee__icon" width="100%" height="100%" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<circle cx="10" cy="10" r="10" fill="#3A3238" />
							<path d="M14.286 9.286H5.714a.715.715 0 0 0 0 1.428h8.572a.715.715 0 0 0 0-1.428Z" fill="#B3A394" />
						</svg>
					</button>

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

					<button
						id="coffee-increase"
						className="coffee__btn"
						name="coffee-increase"
						value="increase"
						onClick={(e) => handleCoffeeStep(e.currentTarget)}
					>
						<svg className="coffee__icon" width="100%" height="100%" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<circle cx="10" cy="10" r="10" fill="#3A3238" />
							<path
								d="M14.286 9.286h-3.572V5.714a.715.715 0 0 0-1.428 0v3.572H5.714a.715.715 0 0 0 0 1.428h3.572v3.572a.715.715 0 0 0 1.428 0v-3.572h3.572a.715.715 0 0 0 0-1.428Z"
								fill="#B3A394"
							/>
						</svg>
					</button>
				</div>
			</div>

			<div className="coffee__output">
				Your total brew weight will be <strong>{brewWeight}g</strong>
			</div>
		</div>
	);
};
