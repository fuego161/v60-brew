export const calcBrewWeight = (brewRatio: BrewRatio, coffeeWeight: number): number => {
	return Math.floor((brewRatio.water / brewRatio.coffee) * coffeeWeight);
};

export const calcBloom = (coffeeWeight: number): Bloom => {
	return {
		recommended: coffeeWeight * 2,
		maximum: coffeeWeight * 3,
	};
};

export const calcSixtyPercent = (brewWeight: number, bloom: Bloom): SixtyPercent => {
	const sixtyPercentTotal = Math.floor((60 / 100) * brewWeight);

	return {
		total: sixtyPercentTotal,
		pour: sixtyPercentTotal - bloom.recommended,
	};
};

export const calcFinalPour = (brewWeight: number, sixtyPercent: SixtyPercent): number => {
	return brewWeight - sixtyPercent.total;
};
