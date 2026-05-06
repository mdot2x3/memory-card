import title from "../assets/title.png";
import logo from "../assets/logo.png";

function Header({ score, bestScore }) {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Jet Set Rotating Logo" />
      </div>
      <div className="title-container">
        <img src={title} alt="Jet Set Memory Card Game" />
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
