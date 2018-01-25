import React from "react";
import PropTypes from "prop-types";
import { Container, RichText } from "horseman-components";

const Paragraph = ({ text }) => {
	return (
		<Container>
			<RichText html={text} />
		</Container>
	);
};

Paragraph.propTypes = {
	text: PropTypes.string,
};

export default Paragraph;
