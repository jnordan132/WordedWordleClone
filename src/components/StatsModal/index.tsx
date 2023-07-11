import React from "react";
import Modal from "react-modal";
import { BsFillBarChartFill, BsXCircle } from "react-icons/bs";

function StatsModal() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      color: "red"
    },
  };

  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f77";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="modal">
        <button onClick={openModal}><BsFillBarChartFill/></button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Statistics Modal"
        >
          <button onClick={closeModal}><BsXCircle/></button>
          <div>STATS MODAL</div>
        </Modal>
      </div>
    </>
  );
}

export default StatsModal;
