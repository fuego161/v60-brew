import React from 'react';

interface PreparationProps {
	coffeeWeight: number;
}

export const Preparation = ({ coffeeWeight }: PreparationProps): JSX.Element => {
	return (
		<div className="stage">
			<h2 className="stage__title">Preparation</h2>

			<ul className="stage__list">
				<li className="stage__item">
					Grind <strong>{coffeeWeight}g</strong> of coffee
				</li>
				<li className="stage__item">Rinse your paper filter with water just off the boil</li>
				<li className="stage__item stage__item--info">This removes any paper taste and preheats the brewer</li>
				<li className="stage__item">Add your coffee grounds to the V60</li>
				<li className="stage__item">Create a well in the middle of the grounds</li>
				<li className="stage__item stage__item--info">This helps to evenly saturate all the grounds during the blooming phase</li>
				<li className="stage__item">Start timer</li>
			</ul>
		</div>
	);
};
