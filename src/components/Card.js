import styles from "./../stylesheets/Card.css"

const Card = ({className, description, title, size, src, ...props}) => {
  const sizeClassName = size ? "card--large" : "";
  return (
    <div className={`card ${className} ${sizeClassName}`}>
      <div className='card__gradient'/>
      <img src={src} className="card__img"/>
      <p className='card__description'>{description}</p>
      <h2 className='card__title'>{title}</h2>
    </div>
  );
};

export default Card;
