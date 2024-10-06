console.log("hallo encoder");
const encode = (word = "") => {
  let encriptedWord = "";
  let digit = 1;

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (char === word[i + 1]) {
      digit++;
    } else {
      if (digit > 1) {
        encriptedWord += digit + char;
      } else {
        encriptedWord += char;
      }
      digit = 1;
    }
  }
  console.log(encriptedWord);
};

encode("ccccatt");

//;
