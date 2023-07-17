import { useState } from "react";
import Modal from "react-modal";
import { BsInfoCircle, BsXCircle } from "react-icons/bs";

function InfoModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <button area-label="open information modal" onClick={openModal}>
          <BsInfoCircle />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal info"
          contentLabel="Information Modal"
        >
          <div className="button">
            <button
              area-label="close information modal"
              className="closeBtn"
              onClick={closeModal}
            >
              <BsXCircle />
            </button>
          </div>
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
            <h3>Credit</h3>
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
