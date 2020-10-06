//Please put your answers here

const { V4MAPPED } = require("dns")
const { element, object } = require("prop-types")

1. What is this code doing? How might it be improved?
Documentation: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/return
we are ending a function here that iterates through an array of questions that is boolean in nature (true/false).
 
  q.subThreadName == this.currentQuestion.subThreadName
          ) 
          //first iteration-if 
     .filter(q => q.mrLevel == this.currentQuestion.mrLevel)
    //second iteration-if 

          .some( q => q.currentAnswer == "No")`
    //third iteration-else 


    let q = 


if (q.subThreadName == this.currentQuestion.subThreadName )) 
{
    console.log("true");
} 
else if (q => q.mrLevel == this.currentQuestion.mrLevel)
{
    console.log(true); //This will be executed
}
else if (q.currentAnswer == "No") 
{
    console.log( "false ")`
);

return !this.allQuestions.filter


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





