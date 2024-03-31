import React, { useEffect, useState } from 'react';

function Search({ items }) {
 const [searchTerm, setSearchTerm] = useState('');
 const [timeoutId, setTimeoutId] = useState(null); // State to hold the timeout ID

 const handleInputChange = (e) => {
   const value = e.target.value;
   setSearchTerm(value);
   
   // Clear any existing timeout
   if (timeoutId) {
     clearTimeout(timeoutId);
   }
   
   // Set a new timeout
   const newTimeoutId = setTimeout(() => {
     // Perform your API call here using the search term
     console.log("Making API call with search term:", value);
   }, 500); // Adjust the delay as per your requirement
   setTimeoutId(newTimeoutId);
 };

 useEffect(() => {
   // Clear the timeout when the component unmounts
   return () => {
     if (timeoutId) {
       clearTimeout(timeoutId);
     }
   };
 }, []);

 return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button>search</button>
    </div>
 );
}

export default Search;
