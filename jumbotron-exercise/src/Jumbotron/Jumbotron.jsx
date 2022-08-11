import "./Jumbotron.css";

const Jumbotron = ({
  backGroundColor,
  primaryHeading,
  primaryText,
  secondaryText,
  buttonText,
  btnBackgroundColor,
}) => {
  return (
    <div className="container" style={{ backgroundColor: backGroundColor  }}>
      <div className="primary-heading">{primaryHeading}</div>
      <div className="primary-text">{primaryText}</div>
      <div className="secondary-text">{secondaryText}</div>
      <div
        className="extra-info"
        style={{ backgroundColor: btnBackgroundColor }}
      >
        <a href="#/" className="redirect-button">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
