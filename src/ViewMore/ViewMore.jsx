import React from "react";
import ViewMoreStyle from "./ViewMore.styles";

const ViewMore = (props) =>{
    return(
        <ViewMoreStyle onClick={props.onClick}>
            Cargar Más
        </ViewMoreStyle>
    )
}

export default ViewMore;