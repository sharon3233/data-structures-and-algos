const Queue = require('./index');

describe('Queue data structure', () => {
	let queue;

	beforeEach(() => {
		queue = new Queue()
	})

	it('has a size of 0 initially', () => {
		expect(queue.size).toBe(0)
	})

	describe('enqueue method', () => {
		
		it('has an enqueue method', () => {
			expect(typeof queue.enqueue).toBe('function')
		})

		it('increases size when item is added', () => {
			queue.enqueue('Snoopy')
			expect(queue.size).toBe(1)
		})


	})

	describe('dequeue method', () => {
		
		it('has an dequeue method', () => {
			expect(typeof queue.dequeue).toBe('function')
		})

		it('decreases size when item is dequeued', () => {
			queue.enqueue('Snoopy')
			queue.enqueue('Woodstock')
			queue.enqueue('Charlie Brown')
			queue.dequeue()
			expect(queue.size).toBe(2)
		})

		it('Dequeue returns items based on first in first out', () => {
			queue.enqueue('first')
			queue.enqueue('second')
			queue.enqueue('third')
			expect(queue.dequeue()).toBe('first')
		})


	})

}) 