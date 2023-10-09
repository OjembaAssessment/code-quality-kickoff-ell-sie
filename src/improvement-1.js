/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function Repetition(string) {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] == "R") {
      count++;
    }
  }
  return count;
}
