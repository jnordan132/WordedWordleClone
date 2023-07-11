import React from "react";
import Modal from "react-modal";
import { BsInfoCircle, BsXCircle } from "react-icons/bs";

function InfoModal() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      background: "rgb(48, 48, 48)"
    },
  };

  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "white";
    subtitle.style.color = "white";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="modal">
        <button onClick={openModal}>
          <BsInfoCircle />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Information Modal"
        >
          <button onClick={closeModal}>
            <BsXCircle />
          </button>
          <section>
            <h5>How to play</h5>
            <p>
              Guess the WORDED in 6 tries. After each guess, the color of the
              tiles will change to show how close your guess was to the word.
            </p>
            <div className="infoRow">
              <div className="box correct">W</div>
              <div className="box">E</div>
              <div className="box">A</div>
              <div className="box">R</div>
              <div className="box">Y</div>
            </div>
            <p>W is in the word and in the correct spot.</p>
            <div className="infoRow">
              <div className="box">P</div>
              <div className="box needed">I</div>
              <div className="box">L</div>
              <div className="box">O</div>
              <div className="box">T</div>
            </div>
            <p>I is in the word but in the wrong spot.</p>
            <div className="infoRow">
              <div className="box">V</div>
              <div className="box">A</div>
              <div className="box">G</div>
              <div className="box wrong">U</div>
              <div className="box">E</div>
            </div>
            <p>U is not in the word in any spot.</p>
          </section>
        </Modal>
      </div>
    </>
  );
}

export default InfoModal;
