//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//The binary number returned should be a string.
 let addBinary =  (a,b)=>(a+b).toString(2) 

//  If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
function dnaStrand(dna){
 return dna.split('').map((l) =>{
    if(l==='A')  return 'T' 
     if(l==='T') return 'A'
     if(l==='C') return 'G'
     if(l==='G') return 'C'
  } ).join('')
  
  
}
//--------------------------------------------------
function getMiddle(str){
   let count = str.length/2
  if(str.length %2 ===0){
  return str[count-1]+str[count]
  }else{
    return str[Math.floor(str.length / 2)]
  }
}
//-------------------------------------------------------------
function dnaStrand(dna){
 return dna.split('').map((l) =>{
    if(l==='A')  return 'T' 
     if(l==='T') return 'A'
     if(l==='C') return 'G'
     if(l==='G') return 'C'
  } ).join('')
  
  
}
//--------------------------------------------------------------------------
function frame(balls) {
  if (/W/.test(balls)) return 'Foul'
  let score = 0
  balls.replace(/([A-Z][a-z]?)(\d*)/g, (m, color, count) => {
    count = count || 1
    score += blz[color] * count
  })
  if (score > 147) return 'invalid data'
  return score
}
//-------------------------------------------
//https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript
function solution(number) {
  if (number <= 0) return 0;

  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

//--------------------------------------------------------
function wave(str) {
  let final = [];
  
  for(i = 0 ; i < str.length ; i++ ){
    if (str[i] === ' ') continue ;
    
    let char = str.split('')
    char[i] = char[i].toUpperCase();;
    final.push (char.join(''))
    
  }
  return final ;
  }

//=====================================================================
  function sumTwoSmallestNumbers(numbers) {  
  // Code here
 let newArr = numbers.slice().sort((a, b) => a - b);
  let total = newArr[0]+ newArr[1];
  return total
}

// ---------------------------------------------------------
function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}
//----------------------------------------------------------
// another solution 
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
// ------------------
function insertDash(num) {
   //code me
return  num.toString().split('').map((n , i , arr)=>
  n  %2 && arr[i+1]%2 ?   n+ '-':  n ).join('')
}
//------------------------------------------- 
function positiveSum(arr) {
 return arr.filter(n=>n>=0).reduce((acc,c) => acc+=c ,0 )
      
}
//----------------------------
