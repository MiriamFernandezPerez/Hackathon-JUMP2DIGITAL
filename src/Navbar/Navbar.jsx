import React from "react";
import NavBarStyle from "./Navbar.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import InputSearch from "../InputSearch/InputSearch";

const Navbar = ({setSearch, setPage, setCharacters}) => {
    return (
        <NavBarStyle>
            <InputSearch setSearch={setSearch} setPage={setPage} setCharacters={setCharacters}/>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </NavBarStyle>
    )
}

export default Navbar;