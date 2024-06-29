import "../programm/ProgrammText.css";
import SymbolLine from "./SymbolLine";

const ProgrammText = ({ text }: { text: string }) => {
  //console.log(text)
  //<div className="programm_line">{text}</div>
  //в SymbolLine передается строчка программы
  return (
    <div className="programm_line">
      <SymbolLine programmLine={text} />
    </div>
  );
};

export default ProgrammText;
