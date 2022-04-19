import React from 'react';
import { StageOutput } from '../utils';

export const FinishingUp = (): JSX.Element => {
	const stage: StageContent = {
		count: 'five',
		title: 'Finishing Up',
		timer: '1:55',
		instructions: [
			{
				copy: 'With a spoon, stir clockwise once, and once anticlockwise',
				information: 'This knocks off grounds from side wall',
			},
			{
				copy: 'Allow the V60 to drain a little',
			},
			{
				copy: 'Give the V60 a gentle swirl',
				information: 'This helps obtain a flat coffee bed at the bottom of the V60 for even an extraction',
			},
			{
				copy: 'Let brew drawdown',
				information: 'The higher the temperature, the faster the drawdown',
			},
			{
				copy: 'Aim to have your drawdown completed by 3:30',
			},
		],
	};

	return StageOutput(stage);
};
