export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  if (password.length !== 10) {
    return false;
  }

  if (!/^[a-zA-Z0-9]+$/gi.test(password)) {
    return false;
  }

  if(/^[a-z]+$/gi.test(password)){
    return false
  }

  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);

  if (!(hasLowerCase && hasUpperCase)) {
    return false;
  }

  for (let i = 0; i < password.length - 2; i++) {
    const char1 = password.charCodeAt(i);
    const char2 = password.charCodeAt(i + 1);
    const char3 = password.charCodeAt(i + 2);

    if (
      (char2 === char1 + 1 && char3 === char2 + 1) ||
      (char2 === char1 - 1 && char3 === char2 - 1)
    ) {
      return false;
    }
  }
  
  if (forbiddenPasswords.includes(password)) {
    return false;
  }

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
