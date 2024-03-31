import React, { useEffect, useState } from "react";
import ApiConfig from "../utils/ApiConfig";

const Search = () => {
    
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    
    const handleSearch = async (event) => {
        event.preventDefault();
        console.log("function called")
        try {
            setLoading(true);
            const response = await fetch(ApiConfig.searchapi + `?q=${search}`);
            const data = await response.json();
            console.log(data);
            setSearchResults(data.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
            
        }
    };

   
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
        console.log(search)
    }



    return (
        <>
            <div className="flex justify-between text-sm text-gray-700">
                <div className="flex items-center">
                    <a className="block p-3">About</a>
                    <a className="block p-3">Store</a>
                </div>
                <div className="flex items-center">
                    <a className="block p-3">Gmail</a>
                    <a className="block p-3">Images</a>
                    <img
                        className="w-20 rounded-full block py-3 px-4"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                </div>
            </div>

            <form className="flex justify-center pt-20" onSubmit={handleSearch}>
                <div>
                    <img
                        className="w-2/3 ml-auto mr-auto mb-6"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    />
                    <div className="flex border border-gray-200 rounded-full p-4 shadow text-xl">
                        <div>🕵️‍</div>
                        <input type="text" value={search} className="w-full outline-none px-3" onChange={handleSearchChange} />
                        <div>🎤</div>
                    </div>
                    <div className="mt-8 text-center">
                        <button type="submit" className="mr-3 bg-gray-200 border border-gray-300 py-3 px-4 rounded hover:bg-gray-400 hover:border-gray-500">
                            Google Search
                        </button>
                        <button className="bg-gray-200 border border-gray-300 py-3 px-4 rounded hover:bg-gray-400 hover:border-gray-500"
                            
                        >
                            I'm Feeling Lucky
                        </button>
                    </div>
                </div>
            </form>

            <div>
                {searchResults}
            </div>

            <div className="fixed bottom-0 bg-gray-200 border-t w-full flex justify-between text-gray-600 text-xs">
                <div className="flex">
                    <a className="block p-3">Advertising</a>
                    <a className="block p-3">Business</a>
                    <a className="block p-3">How Search Works</a>
                </div>
                <div className="flex">
                    <a className="block p-3">Privacy</a>
                    <a className="block p-3">Terms</a>
                    <a className="block p-3">Settings</a>
                </div>
            </div>
        </>
    );
};

export default Search;
