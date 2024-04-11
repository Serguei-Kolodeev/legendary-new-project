import ProgrammText from "./ProgrammText";
import "../programm/ProgrammBody.css";

const ProgrammBody = ({ programmText }: any) => {
  const text = programmText.toString().split(/\r\n/);
  //console.log(text)
  if (text !== undefined) {
    return (
      <div className="programm_body">
        {text.map((value: string, index: number) => (
          <ProgrammText key={index} text={value} />
        ))}
      </div>
    );
  } else {
    return <p>Текст программы не загружен</p>;
  }
};

export default ProgrammBody;
