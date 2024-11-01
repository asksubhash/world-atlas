import PropTypes from "prop-types";
import { useState } from "react";

const SearchFilter = ({ search, setSearch, filter, setFilter,countries,setCountries }) => {
  const [sortOrder, setSortOrder] = useState("asc");
    const handleInputChange = (event) => {
      event.preventDefault();
      setSearch(event.target.value);
    };
  
    const handleSelectChange = (event) => {
      event.preventDefault();
      setFilter(event.target.value);
    };

    const shortCountries = (value) => {
      setSortOrder(value);
      const shortCountry=[...countries].sort((a,b)=>{
        return value=='asc'
        ?a.name.common.localeCompare(b.name.common)
        :b.name.common.localeCompare(a.name.common);
      })
      setCountries(shortCountry);
    };
  
    return (
      <>
        <div className="flex justify-between items-center mb-4">
          {/* Search Input */}
          <div className="flex-grow">
            <input
              type="text"
              value={search || ""}
              onChange={handleInputChange}
              placeholder="Search"
              className="w-full max-w-md p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8338ec] transition duration-200"
            />
          </div>
  
          <div className="flex items-center ml-5">
          <div className="mr-5">
            <button
              className={`mr-3 px-4 py-1 rounded-md transition duration-200 ${sortOrder === "asc" ? "bg-[#8338ec] text-white" : "bg-white text-[#8338ec] border border-[#8338ec] hover:bg-[#9b59b6]"} `}
              onClick={() => { shortCountries('asc'); }}
            >
              Asc
            </button>
            <button
              className={`px-4 py-1 rounded-md transition duration-200 ${sortOrder === "des" ? "bg-[#8338ec] text-white" : "bg-white text-[#8338ec] border border-[#8338ec] hover:bg-[#9b59b6]"} `}
              onClick={() => { shortCountries('des'); }}
            >
              DSC
            </button>
          </div>
  
            <select
              id="location"
              value={filter} // Set the value of the select to filter
              onChange={handleSelectChange}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8338ec] transition duration-200"
            >
              <option value={"All"}>All</option>
              <option value={"Africa"}>Africa</option>
              <option value={"Americas"}>Americas</option>
              <option value={"Asia"}>Asia</option>
              <option value={"Europe"}>Europe</option>
              <option value={"Oceania"}>Oceania</option>
            </select>
          </div>
        </div>
      </>
    );
  };
  

  // Define the prop types for the component
  SearchFilter.propTypes = {
    search: PropTypes.string, // Changed from number to string
    setSearch: PropTypes.func,
    filter: PropTypes.string,
    setFilter: PropTypes.func,
    countries: PropTypes.array,
    setCountries: PropTypes.func,
  };
  export default SearchFilter;
  