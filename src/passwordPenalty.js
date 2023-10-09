/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (password === null || password === undefined){
    return 0;
  } else {
    if (typeof password !== "string") password = String(password);
    const regex = /(.)\1+/g;
    
    const matches = password.match(regex);
    
    let repetitionCounts = [];

    if (matches) {
      repetitionCounts = matches
        .filter(match => match.length > 1) // Filter out non-repeating characters
        .map(match => match.length)
        .map(match => 
        (match === 2) ? 1 : 2);
    }

    const sum = repetitionCounts.reduce((a, b) => a + b, 0); // Initialize the reduce with 0
    return sum || 0;
  }
}
