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
      background: "rgb(48, 48, 48)",
      width: "40%",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
          <section>
            <h2>How to play</h2>
            <p>
              Guess the WORDED in 6 tries. After each guess, the color of the
              tiles will change to show how close your guess was to the word.
            </p>
            <h3>Examples</h3>
            <div className="infoRow">
              <div className="infoBox" id="correct">
                W
              </div>
              <div className="infoBox">E</div>
              <div className="infoBox">A</div>
              <div className="infoBox">R</div>
              <div className="infoBox">Y</div>
            </div>
            <p>W is in the word and in the correct spot.</p>
            <div className="infoRow">
              <div className="infoBox">P</div>
              <div className="infoBox" id="needed">
                I
              </div>
              <div className="infoBox">L</div>
              <div className="infoBox">O</div>
              <div className="infoBox">T</div>
            </div>
            <p>I is in the word but in the wrong spot.</p>
            <div className="infoRow">
              <div className="infoBox">V</div>
              <div className="infoBox">A</div>
              <div className="infoBox">G</div>
              <div className="infoBox" id="wrong">
                U
              </div>
              <div className="infoBox">E</div>
            </div>
            <p>U is not in the word in any spot.</p>
          </section>
          <section>
            <h2>Credit</h2>
            <p>
              Thank you to the original{" "}
              <a href="https://www.nytimes.com/games/wordle/index.html">
                Wordle
              </a>{" "}
              for making this project possible!
            </p>
          </section>
        </Modal>
      </div>
    </>
  );
}

export default InfoModal;
