import React from "react";

const { PanelBody } = wp.components;
const { InspectorControls } = wp.blocks;
const { SelectControl } = InspectorControls;

import { TwoColumn } from "horseman-components";


import ImagePlaceholder from "../../Components/ImagePlaceholder";
import Paragraph from "../../Components/Paragraph";

const Edit = ({ id, setAttributes, attributes, saveStyles, ...rest }) => {

	const onMediaLocationChange = ( mediaLocation ) => {
	};

	const onMediaChange = ( media ) => {
		setAttributes({ url: media.url });
	};

	const onTextChange = ( text ) => {
		setAttributes({ text });
	};

	const { url, text, mediaLocation } = attributes;

	// Setup Controls
	const mediaLocationOptions = [
		{value: "left", label: "Left"},
		{value: "right", label: "Right"},
	];
	const controls = (
		<InspectorControls key="inspector">
			<PanelBody title="Media Location">
				<SelectControl
					onChange={ mediaLocation => setAttributes({ mediaLocation }) }
					options={ mediaLocationOptions }
				/>
			</PanelBody>
		</InspectorControls>
	);

	// Setup Actual Block
	const imageBlock = url ?
		<img src={url} /> :
		<ImagePlaceholder onSelectImage={onMediaChange} {...rest} />;
	const textBlock = <Paragraph text={ text} onChange={onTextChange} {...rest} />;

	const firstCol =  mediaLocation === "right" ? textBlock : imageBlock;
	const secondCol = firstCol === imageBlock ? textBlock : imageBlock;

	return [
		controls,
		<TwoColumn firstCol={firstCol} secondCol={secondCol}  />,
	];

};

export default Edit;
