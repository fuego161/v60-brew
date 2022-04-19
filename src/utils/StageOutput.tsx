import React from 'react';

const outputInstructions = (timer: Timer, instructions: Array<Instruction>): JSX.Element => {
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

export const StageOutput = (stage: StageContent): JSX.Element => {
	const instructionList = outputInstructions(stage.timer, stage.instructions);

	return (
		<div className="stage">
			<h3 className="stage__count">Stage {stage.count}</h3>

			<h2 className="stage__title">{stage.title}</h2>

			{instructionList}
		</div>
	);
};
