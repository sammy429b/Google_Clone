import React, { useEffect, useState } from "react";
import ApiConfig from "../utils/ApiConfig";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Search = () => {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { textData, imageData, error } = useSelector((state) => state.customerReducer);


    const handleSearchChange = (event) => {
        setSearch(event.target.value);
        console.log(search)
    }



    const handleSearch = async (event) => {
        event.preventDefault();
        console.log("function called")
        try {
            setLoading(true)
            const response = await fetch(ApiConfig.searchapi + `?q=${search}`);
            const data = await response.json();
            dispatch({ type: 'SET_TEXT_DATA', payload: data.textData });
            dispatch({ type: 'SET_IMAGE_DATA', payload: data.imageData });
            // dispatch({type: 'SET_VIDEO_DATA', payload: data.videoData});
            // console.log(data);
            console.log(textData)
            console.log(imageData)
            // console.log(videoData)
            navigate('/search');
            // console.log(search);
            setLoading(false)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    };


    if (loading) {
        return <Loader />
    }


    return (
        <>
            <div className="flex justify-between text-sm text-gray-700">
                <div className="flex items-center">
                    <a className="block p-3">About</a>
                    <a className="block p-3">Store</a>
                </div>
                <div className="flex items-center">
                    <a href="https://mail.google.com/mail/u/0/#inbox" className="block p-3">Gmail</a>
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
