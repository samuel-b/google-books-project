import styles from "./SearchBar.module.scss";
import { useState } from "react";

const SearchBar = ({ onSubmit, afterSubmit }) => {
    //Used to track the changes of the value inside the input field.
    const [inputValue, setinputValue] = useState("");
    //Function that updates the state of value using the useState setter and value of the e.target.
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    };
    //Function defined and executed in the container triggered when the button is clicked using the latest user input value as an argument.
    const handleButtonClick = () => {
        onSubmit(inputValue);
    };

    return (
        <div className={styles.SearchBar}>
            <input
                //When the value is changed executes the handleInputChange function.
                onChange={handleInputChange}
                //Setting the value of the input field to the inputValue variable.
                value={inputValue}
                type="text"
            />
            {/* //When button is clicked executes the handleButtonClick function. */}
            <button
                className={styles.SearchBar__Button}
                onClick={handleButtonClick}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
