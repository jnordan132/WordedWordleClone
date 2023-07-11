import { BsInfoCircle, BsFillBarChartFill } from "react-icons/bs";

function Header() {
  return (
    <header>
      <h1>Worded</h1>
      <nav>
        <a>
          <BsInfoCircle />
        </a>
        <a>
          <BsFillBarChartFill />
        </a>
      </nav>
    </header>
  );
}

export default Header;
