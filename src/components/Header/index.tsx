import InfoModal from "../InfoModal";
import StatsModal from "../StatsModal";

function Header() {
  return (
    <header>
      <h1>Worded</h1>
      <nav>
        <a href="#">
          <InfoModal />
        </a>
        <a href="#">
          <StatsModal />
        </a>
      </nav>
    </header>
  );
}

export default Header;
