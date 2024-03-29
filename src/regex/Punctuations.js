const isColon = (character) => {
  return /[:]/.test(character);
};

const isSemiColon = (character) => {
  return /[;]/.test(character);
};

const isComma = (character) => {
  return /[,]/.test(character);
};

const isSingleQuote = (character) => {
  return /[']/.test(character);
};

const isDoubleQuote = (character) => {
  return /["]/.test(character);
};

const isExclamation = (character) => {
  return /[!]/.test(character);
};

const isQuestion = (character) => {
  return /[?]/.test(character);
};
