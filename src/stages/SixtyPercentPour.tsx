import React from 'react';
import { StageOutput } from '../utils';

interface SixtyPercentPourProps {
	sixtyPercent: SixtyPercent;
}

export const SixtyPercentPour = ({ sixtyPercent }: SixtyPercentPourProps): JSX.Element => {
	const stage: StageContent = {
		count: 'three',
		title: '60% Pour',
		timer: '0:45',
		instructions: [
			{
				copy: (
					<>
						Add <strong>{sixtyPercent.pour}g</strong> of water in 30s
					</>
				),
				information: (
					<>
						Here we are aiming for 60% of total brew weight (<strong>{sixtyPercent.total}g</strong>), this stage is critical
					</>
				),
			},
		],
	};

	return StageOutput(stage);
};
