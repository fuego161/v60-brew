import React from 'react';
import { Bloom } from '../stages/Bloom';
import { FinalPour } from '../stages/FinalPour';
import { FinishingUp } from '../stages/FinishingUp';
import { Preparation } from '../stages/Preparation';
import { SixtyPercentPour } from '../stages/SixtyPercentPour';

interface StagesProps {
	coffeeWeight: number;
	bloom: Bloom;
	sixtyPercent: SixtyPercent;
	finalPour: number;
	brewWeight: number;
}

export const Stages = ({ coffeeWeight, bloom, sixtyPercent, finalPour, brewWeight }: StagesProps): JSX.Element => {
	return (
		<>
			<Preparation coffeeWeight={coffeeWeight} />

			<Bloom bloom={bloom} />

			<SixtyPercentPour sixtyPercent={sixtyPercent} />

			<FinalPour finalPour={finalPour} brewWeight={brewWeight} />

			<FinishingUp />
		</>
	);
};
