console.log("hallo encoder");

// encode
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

// decode

const decode = (word = "") => {
  let decriptedWord = "";

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (Number(char)) {
      if (Number(word[i + 1])) {
        let twoDigit = String(char) + String(word[i + 1]);
        decriptedWord += word[i + 2].repeat(Number(twoDigit));
        i += 2;
      } else {
        decriptedWord += word[i + 1].repeat(char);
        i++;
      }
    } else {
      decriptedWord += char;
    }
  }
  console.log(decriptedWord.split(""));
  return decriptedWord;
};

decode("12ca2t");
