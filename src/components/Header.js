import "../stylesheets/Header.css";

const Header = ({className,children}) => {
  return (
    <header className={className}>
      {children}
    </header>
  );
};

export default Header;