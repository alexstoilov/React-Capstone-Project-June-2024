import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <nav>
        <h2>Passion Connect</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
