function Card({ imageUrl, tagName, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageUrl} alt={tagName} />
      <h2>{tagName}</h2>
    </div>
  );
}

export default Card;
