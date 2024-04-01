import "../programm/SymbolLine.css";
import Lexer from "../../Lexer/Lexer";

const readStreamSymbols = (symbolsLine) => {
  let lexer = new Lexer(symbolsLine);

  let result = lexer.lexAnalysys();
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
