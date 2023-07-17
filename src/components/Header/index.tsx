import InfoModal from "../InfoModal";
import StatsModal from "../StatsModal";

function Header() {
  return (
    <header>
      <h1>Worded</h1>
      <nav>
        <a href="#" aria-label="open and read information Modal">
          <InfoModal />
        </a>
        <a href="#" aria-label="open and read statistics Modal">
          <StatsModal />
        </a>
      </nav>
    </header>
  );
}

export default Header;
