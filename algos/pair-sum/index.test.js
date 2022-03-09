let pairSum = require('./index');

describe("pair sum algorithm", () => {

	//const arr = [0, 2, 4, 7, 8, 11, 20];
	const arr = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 
	]

	it("returns a boolean if any two numbers in a sorted array add up to a target sum", () => {
		 expect(pairSum(arr, 9)).toBe(true);
		 expect(pairSum(arr, 2)).toBe(true);
		 expect(pairSum(arr, 17000)).toBe(false);
		 expect(pairSum(arr, -17)).toBe(false);
		 expect(pairSum(arr, 42000)).toBe(false);
	});

	it('does not add the same number twice', () => {
		//expect(pairSum(arr, 16)).toBe(false);
		expect(pairSum(arr,5000)).toBe(false);
		//expect(pairSum(arr, 0)).toBe(false);
		//expect(pairSum(arr, 40)).toBe(false);
	});
})