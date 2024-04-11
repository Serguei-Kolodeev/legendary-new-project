import "../programm/SymbolLine.css";
import Lexer from "../../Lexer/Lexer";

const readStreamSymbols = (symbolsLine: string) => {
  const lexer = new Lexer(symbolsLine);

  const result = lexer.lexAnalysys();
  return result;
};

// eslint-disable-next-line react/prop-types
export const SymbolLine = ({ programmLine }: { programmLine: string }) => {
  let result = [];
  if (programmLine !== undefined) {
    result = readStreamSymbols(programmLine);
    return (
      <>
        {result.map((object, index) => (
          <span key={index} className={object.type}>
            {object.value}
          </span>
        ))}
      </>
    );
  } else {
    return <span>?</span>;
  }
};

export default SymbolLine;
