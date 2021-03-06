import React from 'react';
import { StageOutput } from '../utils';

interface BloomProps {
	bloom: Bloom;
}

export const Bloom = ({ bloom }: BloomProps): JSX.Element => {
	const stage: StageContent = {
		count: 'two',
		title: 'Bloom',
		timer: '0:00',
		instructions: [
			{
				copy: (
					<>
						Add <strong>{bloom.recommended}g</strong> of bloom water
					</>
				),
				information: (
					<>
						Do not pour more than three times the amount of coffee used (<strong>{bloom.maximum}g</strong>)
					</>
				),
			},
			{
				copy: 'Swirl the coffee slurry until evenly mixed',
				information: 'The aim is to wet all the coffee grounds by evenly mixing bloom water and coffee',
			},
			{
				copy: 'Bloom for up to 45s',
				information: 'This allows CO2 to escape which will improve extraction',
			},
		],
	};

	return StageOutput(stage);
};
