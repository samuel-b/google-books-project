import SearchBar from "./components/SearchBar";
import "./App.css";
import {useState} from "react"

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmitSearch = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
    };

    return (
        <>
            <SearchBar onSubmit={handleSubmitSearch} />
            <p>{searchTerm}</p>
        </>
    );
}

export default App;
