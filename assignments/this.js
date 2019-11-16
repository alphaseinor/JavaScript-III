/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. WindowBinding, it's the this for the web browser (don't touch!)
* 2. Implicit Binding, directly binds to the object it's "dotted" to
* 3. New Binding, Makes a new
* 4. Explicit binding, forces a function call to use an object without reference
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

let implicitBinding = {
  name : 'implicitBinding',
  doSomething : function(something){
    console.log(this.name + ' is ' + something);
  } 
}

implicitBinding.doSomething('meh'); // prints 'implicitBinding is meh'

// Principle 3

// code example for New Binding
let coder = {
  name: "brian",
  activity: "coding"
}

let emotions = [ "tired", "working", "coding"] 

implicitBinding.doSomething.apply(coder, emotions)


// Principle 4

// code example for Explicit Binding

implicitBinding.doSomething.call(coder, coder.activity)