import { useState } from "react";
import Modal from "react-modal";
import { BsInfoCircle, BsXCircle } from "react-icons/bs";

interface CustomStyles {
  content: {
    top: string;
    left: string;
    right: string;
    bottom: string;
    marginRight: string;
    transform: string;
    color: string;
    background: string;
    width: string;
    display: string;
    flexDirection: FlexDirection | undefined;
    textAlign: TextAlign | undefined;
  };
}

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type TextAlign =
  | "left"
  | "right"
  | "center"
  | "justify"
  | "initial"
  | "inherit";

function StatsModal() {
  const customStyles: CustomStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      background: "rgb(48, 48, 48)",
      width: "40%",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  if (localStorage.getItem("stats")) {
    var playerStats = JSON.parse(localStorage.getItem("stats") ?? "null");
  } else {
    return;
  }

  return (
    <>
      <div>
        <button onClick={openModal}>
          <BsInfoCircle />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Information Modal"
        >
          <button className="closeBtn" onClick={closeModal}>
            <BsXCircle />
          </button>
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
