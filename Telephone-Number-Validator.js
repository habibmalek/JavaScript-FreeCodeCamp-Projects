/*
First we need to write a regex that pass test the given US numbers valid formats:
555-555-5555    
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

using https://regex101.com/ to pass the regex test for all given numbers 

/^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm
valid regex that passes the test of all given numbers.
*/

function telephoneCheck(str) {
  let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm
  return regex.test(str);
}

telephoneCheck("555-555-5555");
