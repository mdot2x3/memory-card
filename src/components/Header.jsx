function Header({ score, bestScore }) {
  return (
    <div className="header-container">
      <div className="logo">
        <p>logo</p>
      </div>
      <div className="title-container">
        <h1>Jet Set Memory Card Game</h1>
        <p>
          Earn points by clicking on unique cards. Don't click the same card
          twice!
        </p>
      </div>
      <div className="score-container">
        <h3>Score: {score}</h3>
        <h3>Best Score: {bestScore}</h3>
      </div>
    </div>
  );
}

export default Header;
