import "../programm/SymbolLine.css";
import rules from "./RegexRules";

const readStreamSymbols = (symbolsLine) => {
  let result = [];
  let [pointer, obj] = [0, undefined];
  if (symbolsLine !== undefined) {
    while (symbolsLine[pointer] !== undefined) {
      [pointer, obj] = rules.address(pointer, symbolsLine);
      if (obj.result !== undefined) {
        result.push(obj);
        continue;
      }

      [pointer, obj] = rules.latinLetter(pointer, symbolsLine);
      if (obj.result !== undefined) {
        result.push(obj);
        continue;
      }

      [pointer, obj] = rules.signumDigit(pointer, symbolsLine);
      if (obj.result !== undefined) {
        result.push(obj);
        continue;
      }

      [pointer, obj] = rules.digital(pointer, symbolsLine);
      if (obj.result !== undefined) {
        result.push(obj);
        continue;
      }

      [pointer, obj] = rules.cyrilicLetter(pointer, symbolsLine);
      if (obj.result !== undefined) {
        result.push(obj);
        continue;
      }

      [pointer, obj] = rules.space(pointer, symbolsLine);
      if (obj.result !== undefined) {
        result.push(obj);
        continue;
      }

      [pointer, obj] = rules.mathOperation(pointer, symbolsLine);
      if (obj.result !== undefined) {
        result.push(obj);
        continue;
      }

      [pointer, obj] = rules.otherSymbol(pointer, symbolsLine);
      result.push(obj);
    }
  }
  return result;
};

// const readStreamLexems = () => {
//   return null;
// };

// eslint-disable-next-line react/prop-types
export const SymbolLine = ({ programmLine }) => {
  let result = [];
  if (programmLine !== undefined) {
    result = readStreamSymbols(programmLine);
    return (
      <>
        {result.map((object, index) => (
          <span key={index} className={object.type + " " + object.err}>
            {object.result}
          </span>
        ))}
      </>
    );
  } else {
    return <span>?</span>;
  }
};

export default SymbolLine;
