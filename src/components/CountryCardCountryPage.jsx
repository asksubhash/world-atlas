import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CountryCardCountryPage = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  // Get the first capital from the array or use the string directly
  const displayCapital = Array.isArray(capital) ? capital[0] : capital;

  return (
    <div className="border rounded-lg p-5 bg-gray-100 shadow-md">
      <div className="mb-2 flex justify-center">
        <img
          src={flags.svg}
          alt={`${name.common} flag`}
          className="h-20  w-48"
        />
      </div>
      <h2 className="text-lg font-semibold">
        {name.common.length>10?name.common.slice(0,10)+'...':name.common}
        </h2>
      <p>
        <strong>Population:</strong> {population.toLocaleString()}
      </p>
      <p>
        <strong>Region:</strong> {region}
      </p>
      <p>
        <strong>Capital:</strong> {displayCapital}
      </p>
      
      <NavLink to={`/country/${name.common}`}>
        Read More..
      </NavLink>
    </div>
  );
};

// Define the prop types for the component
CountryCardCountryPage.propTypes = {
  country: PropTypes.shape({
    flags: PropTypes.shape({
      svg: PropTypes.string.isRequired, // Ensure flags is an object containing svg
    }).isRequired,
    name: PropTypes.shape({
      common: PropTypes.string.isRequired, // Ensure name has a common property
    }).isRequired,
    capital: PropTypes.oneOfType([ // Allow capital to be either a string or an array
      PropTypes.string.isRequired,
      PropTypes.array.isRequired,
    ]),
    population: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountryCardCountryPage;
