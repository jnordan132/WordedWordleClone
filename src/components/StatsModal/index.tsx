import { useState } from "react";
import Modal from "react-modal";
import { BsFillBarChartFill, BsXCircle } from "react-icons/bs";

function StatsModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (localStorage.getItem("stats")) {
    var playerStats = JSON.parse(localStorage.getItem("stats") ?? "null");
  } else {
    return;
  }

  return (
    <>
      <div>
        <button onClick={openModal}>
          <BsFillBarChartFill />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal stats"
          contentLabel="Information Modal"
        >
          <div className="button">
            <button className="closeBtn" onClick={closeModal}>
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
          </section>
        </Modal>
      </div>
    </>
  );
}

export default StatsModal;
