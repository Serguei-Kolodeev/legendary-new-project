import React from "react";
//export let progTextArr : string [] = [];

const LoadFileButton = ({onProgrammChange} : any) => {
  const ShowFile = React.useCallback(async(e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async(e) => {
      const text = e.target?.result?.toString(); //.split(/\n/); //.filter(s => typeof s === 'string') as string[];
      //console.log(text);
      if (text !== undefined){
        onProgrammChange(text);
      }
    }
    reader.readAsText(e.target.files[0]);
  }, [onProgrammChange])

  return (
    <div>
      <input type={"file"} onChange={(e) => ShowFile(e)} className="file" />
    </div>
  );
};

export default LoadFileButton;
