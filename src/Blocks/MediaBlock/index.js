import setupBlock from '../../helpers/setupBlock';
import Edit from './Edit';
import MediaBlock from "./MediaBlock";

setupBlock({
	blockName:'horseman/media-block',
	title: 'Media Block',
	description: 'Combine a Media element with a Text Element' ,
	icon: 'archive',
	category: 'common',
	keywords: [ 'section' ],
	attributes: {
		wide: {
			type: 'string',
		},
		mediaLocation: {
			type: 'string',
		},
		url: {
			type: 'string',
		},
		text: {
			type: 'array',
		},
	},
	edit: Edit,
	save: MediaBlock,
} );
