/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count=0;
    for(let i=0;i<str.length;i++)
    {
      if(str[i]==='A' || str[i]==='a' || str[i]==='E' || str[i]==='e' || str[i]==='I' || str[i]==='i' || str[i]==='O' || str[i]==='o' || str[i]==='U' || str[i]==='u'){
        count++;
      }
    }
    return count;
}

let ans=countVowels("sdsdfeeioffd")
console.log(ans);
module.exports = countVowels;