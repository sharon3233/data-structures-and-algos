
class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
		this.size = 0
    }
    // push function 
push(element) 
{ 
	// push element into the list items 
	this.items.push(element); 
	this.size += 1
} 
// pop function 
pop() 
{ 
	this.size -= 1
	if (this.items.length == 0) 
		return "Underflow"; 
	return this.items.pop(); 
} 

// isEmpty function 
isEmpty() 
{ 
	// return true if stack is empty 
	return this.items.length == 0; 
} 

// peek function 
peek() 
{ 
	
	return this.items[this.items.length - 1]; 
} 

}

// defining a new stack
let mystack = new Stack()

// checking to see if stack is empty
console.log(mystack.isEmpty());
// Adding elements to the stack 
mystack.push(1); 
mystack.push(2); 
mystack.push(3); 

// Printing the stack element 
// prints [1, 2, 3] 
console.log("printing stack");
let str = ""; 
for (let i = 0; i <= mystack.items.length-1; i++){
	str = str+ mystack.items[i] + " ";
  }
console.log(str);

// returns 3
console.log("Peek = " + mystack.peek()); 

// removes 3 from stack 
mystack.pop(); 

// returns [1, 2] 
console.log("printing stack after pop");
str = ""; 
for (let i = 0; i <= mystack.items.length-1; i++){
		str = str+ mystack.items[i] + " ";
  }
console.log(str);
 
 
module.exports = Stack