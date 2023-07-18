import { useContext } from "react";
import Modal from "react-modal";
import { BsFillBarChartFill, BsXCircle } from "react-icons/bs";
import { AppContext } from "../../App";

Modal.setAppElement("#root");

function StatsModal() {
  const { modalIsOpen, setIsOpen } = useContext(AppContext);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClickReplay = () => {
    window.location.reload();
  };

  if (localStorage.getItem("stats")) {
    var playerStats = JSON.parse(localStorage.getItem("stats") ?? "null");
  } else {
    return;
  }

  return (
    <>
      <div>
        <button aria-label="open statistics modal" onClick={openModal}>
          <BsFillBarChartFill />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal stats"
          contentLabel="Information Modal"
        >
          <div className="button">
            <button
              aria-label="close statistics modal"
              className="closeBtn"
              onClick={closeModal}
            >
              <BsXCircle />
            </button>
          </div>
          <section className="statsModal">
            <h2>Statistics</h2>
            <ul className="statsUl">
              <li className="timesPlayed">
                <b>{playerStats.timesPlayed}</b>
                <p>Played</p>
              </li>
              <li className="timesSolved">
                <b>{playerStats.timesSolved}</b>
                <p>Solved</p>
                <p></p>
              </li>
            </ul>
            <div className="btnDiv">
              <button className="playBtn" onClick={handleClickReplay}>
                Play Again
              </button>
            </div>
          </section>
        </Modal>
      </div>
    </>
  );
}

export default StatsModal;
