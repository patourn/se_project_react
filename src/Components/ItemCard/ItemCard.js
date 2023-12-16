import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div>
        <img
          src={item.link}
          alt="itemlink"
          className="card_image"
          onClick={() => onSelectCard(item)}
        />
      </div>
      <div className="class_name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
