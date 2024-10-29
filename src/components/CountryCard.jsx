import PropTypes from "prop-types";
const CountryCard = ({ country }) => {
  return (
    <div className="bg-gradient-to-r from-[#8338ec] via-[#9b59b6] to-[#9b59b6] rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 duration-300">
      <h2 className="text-xl font-bold text-white mb-2">{country.name}</h2>
      <div className="text-gray-300 mb-2">
        {" "}
        {/* Change to a lighter gray */}
        <p>
          <strong className="text-white">Capital:</strong> {country.capital}
        </p>
        <p>
          <strong className="text-white">Population:</strong>{" "}
          {country.population.toLocaleString()}
        </p>
        <p>
          <strong className="text-white">Interesting Fact:</strong>{" "}
          {country.interestingFact}
        </p>
      </div>
    </div>
  );
};
CountryCard.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    interestingFact: PropTypes.string.isRequired,
  }).isRequired,
};
export default CountryCard;
