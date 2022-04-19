import React from 'react';

interface PreparationProps {
	coffeeWeight: number;
}

const outputStageInstructions = (timer: Timer, instructions: Array<Instruction>): JSX.Element => {
	const instructionList: Array<JSX.Element> = [];

	if (timer.present && timer.time) {
		instructionList.push(
			<li className="stage__item stage__item--timer" key="timer">
				{timer.time}
			</li>
		);
	}

	for (const [index, instruction] of instructions.entries()) {
		instructionList.push(
			<li className="stage__item" key={index}>
				{instruction.copy} {instruction.information.present && <span className="stage__information">{instruction.information.copy}</span>}
			</li>
		);
	}

	return <ul className="stage__list">{instructionList}</ul>;
};

const outputStageContent = (stage: StageContent): JSX.Element => {
	const instructionList = outputStageInstructions(stage.timer, stage.instructions);

	return (
		<div className="stage">
			<h3 className="stage__count">Stage {stage.count}</h3>

			<h2 className="stage__title">{stage.title}</h2>

			{instructionList}
		</div>
	);
};

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

	return outputStageContent(stage);
};
