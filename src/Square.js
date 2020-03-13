import React from 'react';

const Square = ({ color, selected, handleClick }) => {

	const style = {
		height: 200,
		width: 200,
		backgroundColor: selected ? color : 'lightgreen',
	}

	return (
		<div onClick={ handleClick } style={ style } />
	);
};

export default Square;

// Create a component <Squares color="hotpink"> that displays two of your <Square> components and passes through the color prop. As before, when clicked the background colour should change. But only one of the <Square>s should show the given colour at once. You'll need to turn your squares back into stateless components.