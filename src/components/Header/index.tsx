import InfoModal from "../InfoModal";
import StatsModal from "../StatsModal";


function Header() {
  return (
    <header>
      <h1>Worded</h1>
      <br />
      <nav>
        <a>
          <InfoModal />
        </a>
        <a>
          <StatsModal />
        </a>
      </nav>
    </header>
  );
}

export default Header;
