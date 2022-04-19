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

declare interface Instruction {
	copy: string | JSX.Element;
	information?: string | JSX.Element;
}

declare interface StageContent {
	count: string;
	title: string;
	timer?: string;
	instructions: Array<Instruction>;
}
