import './SearchBar.css'
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    return (
        <div id='searchBar'>
            <input type="text" placeholder='Buscar productos' />
            <button><IoIosSearch /></button>
        </div>
    )
}

export default SearchBar