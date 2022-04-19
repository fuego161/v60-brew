import React from 'react';
import { StageOutput } from '../utils';

interface PreparationProps {
	coffeeWeight: number;
}

export const Preparation = ({ coffeeWeight }: PreparationProps): JSX.Element => {
	const stage: StageContent = {
		count: 'one',
		title: 'Preparation',
		instructions: [
			{
				copy: (
					<>
						Grind <strong>{coffeeWeight}g</strong> of coffee
					</>
				),
			},
			{
				copy: 'Rinse your paper filter with water just off the boil',
				information: 'This removes any paper taste and preheats the brewer',
			},
			{
				copy: 'Add your coffee grounds to the V60',
			},
			{
				copy: 'Create a well in the middle of the grounds',
				information: 'This helps to evenly saturate all the grounds during the blooming phase',
			},
			{
				copy: 'Start timer',
			},
		],
	};

	return StageOutput(stage);
};
