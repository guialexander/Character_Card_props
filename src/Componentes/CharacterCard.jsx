import './Styles.css'
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
 const {charter}=props
  const {name, image,status, species, location, origin} = charter

 return (
  <>
  <article className ="characterCard">
    <div className="characterImagen">
      <img
        src={image}
        alt="Blue Footprint Guy"
      />
    </div>
    <div className="characterContent">
      <div className="section">
        <h2>{name}</h2>
        <span className="status">
          <span className={`status__icon status__alive`}></span>
          {status} - {species}
        </span>
      </div>
      <div className="section">
        <span className="text-gray">Last known location:</span>
        <a href={location.url}>{location.name}</a>
      </div>
      <div className="section">
        <span className="text-gray">First seen in:</span>
        <a href={origin.url}>{origin.name}</a>
      </div>
    </div>
  </article>
  </>
)
};

CharacterCard.propTypes={
  charter: PropTypes.arrayOf(
    PropTypes.shape({
          name: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          status: PropTypes.string.isRequired,
          species: PropTypes.string.isRequired,
          

    }).isRequired
  ),


}

export default CharacterCard;
