//Please put your answers here

const { V4MAPPED } = require("dns")
const { element, object } = require("prop-types")

1. What is this code doing? How might it be improved?





2. What is this code doing?
var oldAssessment = this.allQuestions.map( q => Object.assign({}, q));

The variable "oldAssessment" is being defined. 
The first part of the definition is a callback (this.allQuestions.map). 
see documentation for callback here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
But to summarize, we have the value of our element, the index of our element, and the object being V4MAPPED. 

The final part is function "q" which executes "object.assign" and has a method of ({}, q)); as params. 



3. What is this code doing?



4.  I have an array of objects, they are currently untyped.
 I'm unsure of how but mixed in with my normal objects (`{ id, name, date, createdAt }`), 
 are `null` values. How would you eliminate the null values




5.  In Angular 2+ how to you pass variable(s) from a parent to a child? answer in concept





