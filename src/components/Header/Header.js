import "./Header.css";

const Header = () => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src="/images/Logo.png" alt="logo" />
        </div>
        <div>Date,Location</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text">Add New Clothes</button>
        </div>
        <div>Pablo A. Tourn</div>
        <div>
          <img src="/images/Avatar.png" alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
