import React from "react";
import Header from "./components/header/Header";
import ProgrammBody from "./components/programm/ProgrammBody";
import "../src/App.css";

const App = () => {
  //const [programmText, setProgrammText] = React.useState("здэся будэ текст программэ");
  const [programmText, setProgrammText] = React.useState("зб");
  return (
    <div className="App">
      {/*<CMPProgramm/>*/}
      {/*<LeftSideBar/>*/}
      <Header onProgrammChange={setProgrammText} />
      <ProgrammBody programmText={programmText} />
      {/*<Footer/>*/}
    </div>
  );
};

export default App;
