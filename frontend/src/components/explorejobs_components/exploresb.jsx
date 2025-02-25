//Code for search only

// // import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     onSearch(query); // Pass query to parent component
//   };

//   return (
//     <div className="flex items-center bg-white bg-opacity-60 rounded-full shadow-md p-3 w-full max-w-lg mx-auto">
//       <FaSearch className="text-gray-500 mx-2" />
//       <input
//         type="text"
//         placeholder="Search for jobs..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="flex-grow bg-transparent outline-none px-4 py-2 text-gray-700 placeholder-gray-500"
//       />
      // <button
      //   onClick={handleSearch}
      //   className="bg-black text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
      // >
      //   Search
      // </button>
//     </div>
//   );
// };

// export default SearchBar;


// code for dynamic search and filter
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Pass query to parent component in real-time
  };

  return (
    <div className="flex items-center bg-white bg-opacity-60 rounded-full shadow-md p-3 w-full max-w-lg mx-auto">
      <FaSearch className="text-gray-500 mx-2" />
      <input
        type="text"
        placeholder="Search for jobs..."
        value={query}
        onChange={handleChange} // Search updates live while typing
        className="flex-grow bg-transparent outline-none px-4 py-2 text-gray-700 placeholder-gray-500"
      />
            <button
        className="bg-black text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
