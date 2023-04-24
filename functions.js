export function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  const stringArr = string.split("");
  const reversedStringArr = stringArr.reverse();
  return reversedStringArr.join("");
}

export const calculator = {
  add(a, b) {
    const convertedA = parseInt(a);
    const convertedB = parseInt(b);
    return convertedA + convertedB;
  },
  subtract(a, b) {
    const convertedA = parseInt(a);
    const convertedB = parseInt(b);
    return convertedA - convertedB;
  },
  divide(a, b) {
    const convertedA = parseInt(a);
    const convertedB = parseInt(b);
    return convertedA / convertedB;
  },
  multiply(a, b) {
    const convertedA = parseInt(a);
    const convertedB = parseInt(b);
    return convertedA * convertedB;
  },
};

export function caesarCipher(str, shift) {
  // If the shift value is negative, convert it to positive
  if (shift < 0) {
    shift = 26 - (Math.abs(shift) % 26);
  }

  // Initialize an empty string to hold the result
  let result = "";

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Get the ASCII code of the current character
    let charCode = str.charCodeAt(i);

    // If the character is uppercase
    if (charCode >= 65 && charCode <= 90) {
      // Apply the shift and handle wrapping around the alphabet
      charCode = ((charCode - 65 + shift) % 26) + 65;
    }
    // If the character is lowercase
    else if (charCode >= 97 && charCode <= 122) {
      // Apply the shift and handle wrapping around the alphabet
      charCode = ((charCode - 97 + shift) % 26) + 97;
    }

    // Convert the new ASCII code back to a character and add it to the result
    result += String.fromCharCode(charCode);
  }

  return result;
}

export function analyzeArray(array) {
  const getAverage = () => {
    const sum = array.reduce(
      (accumulator, current) => accumulator + current,
      0
    );
    return sum / array.length;
  };

  return {
    average: getAverage(),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
