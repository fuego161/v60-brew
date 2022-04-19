import React from 'react';
import { StageOutput } from '../utils';

interface FinalPourProps {
	finalPour: number;
	brewWeight: number;
}

export const FinalPour = ({ finalPour, brewWeight }: FinalPourProps): JSX.Element => {
	const stage: StageContent = {
		count: 'four',
		title: 'Final Pour',
		timer: '1:15',
		instructions: [
			{
				copy: (
					<>
						Over the next 30s, pour the final <strong>{finalPour}g</strong> of water
					</>
				),
				information: (
					<>
						This will take you to your final brew weight of <strong>{brewWeight}g</strong>
					</>
				),
			},
		],
	};

	return StageOutput(stage);
};
