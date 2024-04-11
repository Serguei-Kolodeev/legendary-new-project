import React from "react";
//export let progTextArr : string [] = [];

const LoadFileButton = ({ onProgrammChange }: any) => {
  const ShowFile = React.useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      let text;
      //e.preventDefault();
      if (!e.target.files) {
        text = "Файл не выбран";
        return;
      }
      const reader = new FileReader();
      reader.readAsText(e.target.files[0]);
      reader.onload = () => {
        text = reader.result;
        console.log(text);
        if (text !== undefined) {
          onProgrammChange(text);
        }
      };
    },
    [onProgrammChange]
  );

  return (
    <div>
      <input type={"file"} onChange={(e) => ShowFile(e)} className="file" />
    </div>
  );
};

export default LoadFileButton;
