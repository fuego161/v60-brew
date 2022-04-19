import React from 'react';

/**
 * Creates the instruction list for the stage. If timer is present for the section, it'll top the list
 *
 * @param timer - the values from the timer object. Whether it's present, and if so, the time at the start of the stage
 * @param instructions - an array of each instruction to be output
 * @returns the list of instructions
 */
const createInstructionsList = (timer: Timer, instructions: Array<Instruction>): JSX.Element => {
	// Set an array to store each instruction item
	const instructionList: Array<JSX.Element> = [];

	// If the timer is present, add it to the list first
	if (timer.present && timer.time) {
		instructionList.push(
			<li className="stage__item stage__item--timer" key="timer">
				{timer.time}
			</li>
		);
	}

	// Loop over each instruction
	for (const [index, instruction] of instructions.entries()) {
		// Store the instruction as an li in the list array
		instructionList.push(
			<li className="stage__item" key={index}>
				{instruction.copy} {instruction.information.present && <span className="stage__information">{instruction.information.copy}</span>}
			</li>
		);
	}

	return <ol className="stage__list">{instructionList}</ol>;
};

/**
 * Takes the standardised Stage object and returns the markup ready for directly outputting
 *
 * @param stage - The content of the stage stored as an object
 * @returns A div containing all stage markup
 */
export const StageOutput = (stage: StageContent): JSX.Element => {
	// Create the instruction list
	const instructionList = createInstructionsList(stage.timer, stage.instructions);

	// Return the stage section
	return (
		<div className="stage">
			<h3 className="stage__count">Stage {stage.count}</h3>

			<h2 className="stage__title">{stage.title}</h2>

			{instructionList}
		</div>
	);
};
