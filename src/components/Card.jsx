function Card({ imageUrl, tagName }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={tagName} />
      <h2>{tagName}</h2>
    </div>
  );
}

export default Card;
