/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

//first sort the error and then compare the string, if any of the character didnt mathed, return false.
function isAnagram(str1, str2) {
  if(str1.length!=str2.length)
  {
    return false;
  }

  let str3=str1.split('')
  let str4=str2.split('')

  console.log(str3);
  str3.sort();
  str4.sort();
  
  for(let i=0;i<str3.length;i++)
  {
    if(str3[i]!=str4[i]){
      return false;
    }
  }

  return true;
}

console.log(isAnagram("spar","rasp"));
module.exports = isAnagram;
