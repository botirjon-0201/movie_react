export default function Header() {
  const hash = "#";
  return (
    <nav>
      <div className="nav-wrapper container">
        <a href={hash} className="brand-logo">
          React
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href={hash}>Movie</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
