import LoadFileButton from "../load_file_button/index";
import "../header/Header.css";

const Header = ({ onProgrammChange }: any) => {
  return (
    <div className="header">
      <LoadFileButton onProgrammChange={onProgrammChange} />
    </div>
  );
};

export default Header;
