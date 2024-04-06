// Problem 1
// Voting Eligibility: Write a program that checks whether a person can vote.
// To be eligible, a person must be at least 18 years old and a citizen of the
// country.

var age = 50
var citizen = 'indian'

if(age>=18 && citizen=='indian'){
    console.log('you are eligible for voting')
}
else{
    console.log("you are not eligible for voting")
}