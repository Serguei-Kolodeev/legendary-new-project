const isSlash = (character) => {
  return /[/]/.test(character);
};

const isHash = (character) => {
  return /[#]/.test(character);
};

const isDollar = (character) => {
  return /[$]/.test(character);
};

const isPercent = (character) => {
  return /[%]/.test(character);
};

const isAmpersand = (character) => {
  return /[&]/.test(character);
};

const isTilda = (character) => {
  return /[`]/.test(character);
};

const isCaret = (character) => {
  return /[^]/.test(character);
};

const isAt = (character) => {
  return /[@]/.test(character);
};

const isPipe = (character) => {
  return /[|]/.test(character);
};
