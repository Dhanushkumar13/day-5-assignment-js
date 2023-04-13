//ANONYMOUS FUNCTION
//Print odd numbers in an array
var number = [11,22,3,33,444,555,55]
var i = 0
var odd = ( () => {
    for(var i =0; i<number.length; i++){
        if(number[i]%2==1){
            console.log(number[i])
        }
    }
})();

//Convert all the strings to title caps in a string array
var alphabet = 'An apple a day keeps the doctor away'
var upper = [];
var conversion = ( () => {
    upper.push(alphabet.toUpperCase());
    console.log(upper);
}) ();


//Sum of all numbers in an array
var sum = [2,3,4,5,6]
var addition = sum.reduce((PreviousValue,CurrentValue) => {
    console.log(PreviousValue,CurrentValue);
    return PreviousValue + CurrentValue;
    
})
console.log(addition);


//Return all the prime numbers in an array
var number = 222;
var prime  = ( () => {
    for(var i = 2; i< number; i++){
        if(number%i == 0){
            console.log(`${number} is not a prime number`)
            return;
        }else{
            console.log(`${number} is a prime number`)
        }
    }
}) ();


//Palindrome
var checkPalindrome = function(str) {
  
    const reversedString = str.split('').reverse().join('');
    if(str === reversedString)
          console.log('It is a palindrome',str);
    else
          console.log('It is not a palindrome',str);
};

checkPalindrome("racecar");

//ARROW FUNCTION
//Print odd numbers in an array
var number = [11,22,3,33,444,555,55]
var i = 0
let odd = () => {
    for(var i =0; i<number.length; i++){
        if(number[i]%2==1){
            console.log(number[i])
        }
    }
};
odd();

//Convert all the strings to title caps in a string array
var alphabet = 'An apple a day keeps the doctor away'
var upper = [];
var conversion = () => {
    upper.push(alphabet.toUpperCase());
    console.log(upper);
};
conversion();

//Sum of all numbers in an array
var sum = [2,3,4,5,6]
var addition = () => {
  sum.reduce((PreviousValue,CurrentValue) => {
    console.log(PreviousValue,CurrentValue);
    return PreviousValue + CurrentValue;
    
  })
}
console.log(addition);

//Return all the prime numbers in an array
var number = 222;
var prime  =  () => {
    for(var i = 2; i< number; i++){
        if(number%i == 0){
            console.log(`${number} is not a prime number`)
            return;
        }else{
            console.log(`${number} is a prime number`)
        }
    }
};
prime();

//Palindrome
var checkPalindrome = (str) => {
  
    const reversedString = str.split('').reverse().join('');
    if(str === reversedString)
          console.log('It is a palindrome',str);
    else
          console.log('It is not a palindrome',str);
};

checkPalindrome("racecar");