import styled from "styled-components";

const NavBarStyle = styled.nav`
    display: flex;
    position: relative;
    padding: 2em 0 1em;
    justify-content: center;

    svg{
        position: absolute;
        display: block;
        right: 13%;
        top: 48%;
        color: #61dafb;
        font-size: calc(.8em + 1vw);
    }
`;

export default NavBarStyle;