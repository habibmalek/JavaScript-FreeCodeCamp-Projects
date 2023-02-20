/* 
I used regex to remove all non-alphanumeric characters (punctuation, spaces, and symbols) 
and turned everything into the same case (lower or upper case), then reverse the string to check if its palindrome or not.
*/

function palindrome(str) {
  str = str.replace(/\W|_/g, "").toLowerCase()
  let rev = str.split("").reverse().join("")
  if(str === rev) return true;
  return false;
}

palindrome("2_A3 *3#a2");
