import styled from "styled-components";

const CardStyle = styled.div`
    color: #fff;
    background-color: #00C5A5;
    -moz-border-radius: .5em;
    -webkit-border-radius: .5em;
    border-radius: .4em;
    border: .25em solid #FCFCD4;
        
    & .cardTitle {
        display: flex;
        background-color: #00C5A5;
        padding: 25% 4%;
        height: 0;
        align-items: center;
        justify-content: center;
    }
    
    & .cardTitle .title {
        font-weight: bold;
        text-decoration: underline;
        padding: .1em 0;
        font-size: calc(.7em + 1vw);
    }

    & .cardImage {
        background-color: #148c44;
    }

    & .cardImage img{
        width: 85%;
        -moz-border-radius: 50% 50%;
        -webkit-border-radius: 50% 50%;
        border-radius: 50% 50%;
        margin: 7% auto;
        border: .3em solid #00C5A5;
    }

    & .cardInfo {
        display:flex;
        flex-direction: column;
        padding: 0.5em 0;
    }

    & .cardInfo span {
        padding: .1em 0;
        font-size: calc(.6em + 1vw);
        font-weight: bold;
    }

    & .estado p {
        font-size: calc(.4em + 1vw);
    }    
`;

export default CardStyle;

