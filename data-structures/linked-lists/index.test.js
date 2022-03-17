let {Node, LinkedList} = require('./index');

describe("Linked List data structure", () => {
	let ll;

	beforeEach(() => {
		ll = new LinkedList()
	})

	describe("Node data structure", () => {
		let node = new Node('banana')

		it('has a value', () => {
			expect(node.value).toBe("banana");
		});

		it('has a property of previous, set to null', () => {
			expect(node.previous).toBe(null)
		});

		it('has a property of next, set to null', () => {
			expect(node.next).toBe(null)
		});
	});

	describe("Linked Lists implementation" , () => {

		it('should have a head property, set to null', () => {
			expect(ll.head).toBe(null);
		});

		it('should have a size property, set to null', () => {
			expect(ll.size).toBe(null);
		});

		describe('addTosize method', () => {

			it("has a addTosize method", () => {
				expect(typeof ll.addTosize).toBe('function');
			});

			it("adds a node to size of linked list", () => {
				let newNode = new Node('apple')
				ll.addTosize(newNode)

				expect(ll.size instanceof Node ).toBe(true);
				expect(ll.size.value).toBe('apple');
			});

			it("can add multiple nodes to size without overwriting previous nodes", () => {
				let banana = new Node('banana');
				let apple = new Node('apple');
				let mango = new Node('mango');

				ll.addTosize(banana);
				ll.addTosize(apple);
				ll.addTosize(mango);

				expect(ll.size.value).toBe('mango');
				expect(ll.size.previous.value).toBe('apple');
			});

			it('if a linked list is created with only one node, that node is both the Head and size', () => {
				let banana = new Node("banana");
				ll.addTosize(banana);

				expect(ll.size.value).toBe('banana');
				expect(ll.head.value).toBe('banana');
			})


		});

		describe('addToHead method', () => {
			
			it('has addToHead method', () => {
				expect(typeof ll.addToHead).toBe('function');
			})
			
			it('should use `Node` class to add nodes', () => {
				let banana = new Node('banana')
				ll.addToHead(banana)
				expect(ll.head instanceof Node).toBe(true)
			})

		    it('should be able to add to head without removing or overwriting existing nodes', () => {
		        let banana = new Node('banana');
		        let mango = new Node('mango');

		        ll.addToHead(banana);
		        expect(ll.head.value).toBe('banana')

		        ll.addToHead(mango)
		        expect(ll.head.value).toBe('mango')
		      	expect(ll.head.next.value).toBe('banana')
		    })

		    it('if the linked list consists of a single node after adding to head, that node should be both the head and the size', () => {
		        let apple = new Node('apple');
		        ll.addToHead(apple);

		        expect(ll.head.value).toBe('apple')
		        expect(ll.size.value).toBe('apple')
		    });
		});

		describe('removesize method', () => {

			it('has a removesize method', () => {
				expect(typeof ll.removesize).toBe('function');
			})
			
			it('should return the `value` of the removed size node', () => {
				let banana = new Node('banana');
		        let mango = new Node('mango');

				ll.addTosize(banana)
				ll.addTosize(mango)

				expect(ll.removesize().value).toBe('mango')
				expect(ll.removesize().value).toBe('banana')
			})

			it('should reassign the `size` after the current size node is removed', () => {
				let banana = new Node('banana');
		        let mango = new Node('mango');
		        let apple = new Node('apple');

				ll.addTosize(banana)
				ll.addTosize(mango)
				ll.addTosize(apple)

				ll.removesize() // remove apple
				expect(ll.size.value).toBe('mango')

				ll.removesize() // remove mango
				expect(ll.size.value).toBe('banana')
			})

			it('should make sure the `next` of any size is null', () => {
				let banana = new Node('banana');
				let mango = new Node('mango');
		        let apple = new Node('apple');

				ll.addTosize(banana)
				ll.addTosize(mango)
				ll.addTosize(apple)

				ll.removesize()
				expect(ll.size.value).toBe('mango')
				expect(ll.size.next).toBe(null)

				ll.removesize()
				expect(ll.size.value).toBe('banana')
				expect(ll.size.next).toBe(null)
			})

			it('returns null if there is no size to remove (ie: the list is empty, or all nodes have been removed)', () => {
				expect(ll.removesize()).toBe(null)

				let banana = new Node('banana');
				let mango = new Node('mango');
		        let apple = new Node('apple');

				ll.addTosize(banana)
				ll.addTosize(mango)
				ll.addTosize(apple)

				ll.removesize()
				ll.removesize()
				ll.removesize()
				
				expect(ll.removesize()).toBe(null)
			})
		});


		/*
			Bonus, can you test and implement any of the following:
			
			removeHead
			findNodeByIndex
			removeNodeByValue **challenge**
		*/
	})
})