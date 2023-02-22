/*
First I define alphabet as string, and an empty answer to save the cipher in,
make a for loop to check the sting via difference between first letter 
and the proposed output and it was 13 letters and to get the all alphabet 
we need to check for 26 letters so we make two if conditions by add 
and subtract the difference and last an incremental index to keep 
the spaces as it is.
*/

function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let ans = ""; 
  
  for( let i=0; i < str.length; i++){
    if(alphabet.indexOf(str[i]) >= 13){
      ans += alphabet[alphabet.indexOf(str[i]) - 13]
    } 
    else if(alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1){
      ans += alphabet[alphabet.indexOf(str[i]) + 13]
    } 
    else {
      ans += str[i]
      }} 
  return ans;
}


rot13("SERR PBQR PNZC");



