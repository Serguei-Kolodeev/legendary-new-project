import '../programm/ProgrammText.css';
import SymbolLine from '../programm/SymbolLine';

const ProgrammText = ({text} :any) => {
//console.log(text)
//<div className="programm_line">{text}</div>
return (
    <div className="programm_line">
        <SymbolLine  programmLine = {text}/>
    </div>
);
}

export default ProgrammText;