import React from 'react';
import { StageOutput } from '../utils';

interface PreparationProps {
	coffeeWeight: number;
}

export const Preparation = ({ coffeeWeight }: PreparationProps): JSX.Element => {
	const stage: StageContent = {
		count: 'one',
		title: 'Preparation',
		timer: {
			present: false,
		},
		instructions: [
			{
				copy: (
					<>
						Grind <strong>{coffeeWeight}g</strong> of coffee
					</>
				),
				information: {
					present: false,
				},
			},
			{
				copy: 'Rinse your paper filter with water just off the boil',
				information: {
					present: true,
					copy: 'This removes any paper taste and preheats the brewer',
				},
			},
			{
				copy: 'Add your coffee grounds to the V60',
				information: {
					present: false,
				},
			},
			{
				copy: 'Create a well in the middle of the grounds',
				information: {
					present: true,
					copy: 'This helps to evenly saturate all the grounds during the blooming phase',
				},
			},
			{
				copy: 'Start timer',
				information: {
					present: false,
				},
			},
		],
	};

	return StageOutput(stage);
};
