import React from "react";

import Section from "./Section";

const Blocks = ({ id, setAttributes, attributes, saveStyles }) => {

	if(!attributes.background){
		setAttributes({ background: "#ddd" });
	}

	return (
		<Section {...attributes} />
	);

};

export default Blocks;
