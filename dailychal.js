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
function getMiddle(str){
   let count = str.length/2
  if(str.length %2 ===0){
  return str[count-1]+str[count]
  }else{
    return str[Math.floor(str.length / 2)]
  }
}
