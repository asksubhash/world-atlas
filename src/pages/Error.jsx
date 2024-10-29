import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Oops! An error occurred.
        </h1>
        <p className="text-gray-700 mb-6 text-sm">
          Something went wrong. We apologize for the inconvenience.
        </p>
        {error && (
          <p className="text-gray-500 italic bg-gray-100 p-4 rounded-md border border-gray-200 mb-4">
            {error.data}
          </p>
        )}
       
       <Link
          to={"/"}
          className="mt-8 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
        >
          Home
        </Link>
      </div>
      
    </div>
  );
};

export default Error;
