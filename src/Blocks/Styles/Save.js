import React from "react";

import Styles from "./Styles";

const Save = ({ content }) => {

	const stylesFromStore = wp.data.select( 'horsemanBlocks', 'getStyles' );

	const output  = stylesFromStore ? stylesFromStore : content;

	return (
		<div dangerouslySetInnerHTML={{__html: output}} />
	);

};

export default Save;
