import SearchBar from "./components/SearchBar";
import BookShelf from "./containers/BookShelf/BookShelf";
import { useEffect, useState } from "react";

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    //When a search term is entered into the input field and the search button is clicked change the value of searchTerm to the Google Book API Base URL + searchTerm entetered into the input field by the user so it can be used to fetch data.
    const handleSubmitSearch = async (newSearchTerm) => {
        const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
        setSearchTerm(`${BASE_URL}${newSearchTerm}`);
    };

    const [books, setbooks] = useState([]);

    //Tracks the searchTerm variable, when the value is changed by the above function, using the data from the function above fetch data using fetch())
    useEffect(() => {
        if (searchTerm !== "") {
            const getData = async () => {
                const response = await fetch(searchTerm);
                const data = await response.json();
                setbooks(data.items);
            };
            getData();
        }
    }, [searchTerm]);

    return (
        <>
            <SearchBar onSubmit={handleSubmitSearch} />
            <BookShelf books={books} />
        </>
    );
}

export default App;
