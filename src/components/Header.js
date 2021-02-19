import "../stylesheets/Header.css";
import 'remixicon/fonts/remixicon.css';

const Header = ({className,children}) => {
  return (
    <header className={className}>
      {children}
    </header>
  );
};

export default Header;