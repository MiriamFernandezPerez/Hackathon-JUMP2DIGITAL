import styled from "styled-components";

const InputSearchStyle = styled.input`
    background-color: #334A52;
    border: .12em solid #01afc7;
    -moz-border-radius: 1em;
    -webkit-border-radius: 1em;
    border-radius: 1em;
    padding: .6em;
    outline: 0;
    -webkit-appearance: none;
    width: 80%;
    color: #61dafb;
    font-size: calc(.5em + 1vw);

    &::placeholder { color: #538897; }
    &::-webkit-input-placeholder { color:#538897; } /* WebKit */
    &::-moz-placeholder { color: #538897; } /* Firefox 19+ */
    

    &:focus {
        border: .16em solid #61dafb;
    }

    
`;

export default InputSearchStyle;