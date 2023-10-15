const ItemCard = ({ item }) => {
  return (
    <div>
      <div>
        <img src={item.link} className="card_image" />
      </div>
      <div className="class_name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
