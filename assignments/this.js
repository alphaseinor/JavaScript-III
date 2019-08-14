/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let windowBinding = () => {
  return this;
}

console.log(windowBinding())


// Principle 2

// code example for Implicit Binding

let ImplicitBinding = function () {
  name = 'ImplicitBinding';
}

ImplicitBinding.prototype.doSomething = (something) => {
  console.log(this.name + ' is ' + something);
}

let obj = new ImplicitBinding();

obj.doSomething('meh'); // prints 'implicitBinding is meh'

// Principle 3

// code example for New Binding



// Principle 4

// code example for Explicit Binding