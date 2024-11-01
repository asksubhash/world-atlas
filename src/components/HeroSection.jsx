import { FaLongArrowAltRight } from "react-icons/fa";
import worldImage from '../assets/world-3.png';
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-5">
          <div className="hero_content flex flex-col justify-center p-6  ">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Explore the world, One country at a time
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              Discover the history, culture, and beauty of nations. Short,
              search, and filter through countries to find the details you need.
            </p>

            <Link to={`/country`} className="flex items-center justify-between px-4 py-2 text-white bg-main border border-transparent rounded-md hover:bg-opacity-90 transition-all duration-300 max-w-fit mt-2">
              <span>Start Exploring</span>
              <FaLongArrowAltRight className="ml-2" />
            </Link>
          </div>
          <div className="hero_image flex items-center justify-center">
            <img
              src={worldImage}
              alt="World Map"
              className="w-full h-auto "
            />
          </div>
        </div>
    </>
  )
}

export default HeroSection