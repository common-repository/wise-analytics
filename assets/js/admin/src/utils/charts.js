export function getNumberTickValues(maxNumber, forceMax = true) {
	if (maxNumber === 0) {
		return [0];
	} else if (maxNumber < 20) {
		return [0, forceMax ? maxNumber : maxNumber + Math.ceil(maxNumber / 10)];
	} else {
		return [0, Math.ceil(maxNumber / 2), maxNumber];
	}
}