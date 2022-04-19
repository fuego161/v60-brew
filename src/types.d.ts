// Brew Variables
declare interface BrewRatio {
	coffee: number;
	water: number;
}

declare interface Bloom {
	recommended: number;
	maximum: number;
}

declare interface SixtyPercent {
	total: number;
	pour: number;
}

// Stage Output
declare interface Timer {
	present: boolean;
	time?: string;
}

declare interface Information {
	present: boolean;
	copy?: string | JSX.Element;
}

declare interface Instruction {
	copy: string | JSX.Element;
	information: Information;
}

declare interface StageContent {
	count: string;
	title: string;
	timer: Timer;
	instructions: Array<Instruction>;
}
