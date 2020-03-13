import React, { useState } from "react";
import Square from "./Square";

const Squares = ({ color }) => {

    const [selected, setSelected] = useState(1);

    const handleClick = (squareId) => {
        setSelected(squareId)
    }

    return (
        <>
            <Square color={ color } selected={ selected === 1 } handleClick={ () => handleClick(1) }/>
            <Square color={ color } selected={ selected === 2 } handleClick={ () => handleClick(2) } />
        </>
    )
}

export default Squares;