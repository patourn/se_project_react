import "./Header.css";

const Header = ({ onCreateModal }) => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../images/Logo.png").default} alt="logo" />
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
          <img src="../images/Avatar.png" alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
