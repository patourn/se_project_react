import "./Header.css";
import Logo from "../../images/Logo.png";
import Avatar from "../../images/Avatar.png";

const Header = ({ onCreateModal }) => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div>Date,Location</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" onClick={onCreateModal}>
            Add New Clothes
          </button>
        </div>
        <div>Pablo A. Tourn</div>
        <div>
          <img src={Avatar} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
