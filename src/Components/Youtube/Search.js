import React, {useState} from "react";

const Search = ({onSubmit}) =>{
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => setSearchTerm(event.target.value);

    const KeyPress = (event) =>{
        if(event.key === "Enter") {
            onSubmit=(searchTerm);
        }
    }

    return(
        <div>
            <input className="input"
             type="text"
             fullWidth
             placeholder="Search.."
             value={searchTerm}
             onChange={handleChange}
             onKeyPress={KeyPress}
            />
        </div>
    )
}

export default Search;