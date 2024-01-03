import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  console.log("item modal");

  return (
    <div className="modal">
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img src={selectedCard.link} alt="modal image" />
        <p>{selectedCard.name}</p>
        <div> Weather type: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;
