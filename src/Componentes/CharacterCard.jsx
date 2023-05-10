import './Styles.css'

const CharacterCard = ({charter}) => (

  <article className="characterCard">
    <div className="characterImagen">
      <img
        src={charter.image}
        alt="Blue Footprint Guy"
      />
    </div>
    <div className="characterContent">
      <div className="section">
        <h2>{charter.name}</h2>
        <span className="status">
          <span className={`status__icon status__alive`}></span>
          {charter.status} - {charter.species}
        </span>
      </div>
      <div className="section">
        <span className="text-gray">Last known location:</span>
        <a href={charter.location.url}>{charter.location.name}</a>
      </div>
      <div className="section">
        <span className="text-gray">First seen in:</span>
        <a href={charter.origin.url}>{charter.origin.name}</a>
      </div>
    </div>
  </article>
);

export default CharacterCard;
