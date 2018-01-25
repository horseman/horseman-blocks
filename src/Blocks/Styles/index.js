import setupBlock from '../../helpers/setupBlock';
import Edit from './Edit';
import Save from './Save';
import setupReducer from "./reducer";

setupBlock({
	blockName:'horseman/styles',
	title: 'Styles',
	description: 'Style Holder' ,
	icon: 'archive',
	category: 'common',
	keywords: [ 'section' ],
	attributes: {
		content: {
			source: 'html',
			selector: 'div',
		}
	},
	edit: Edit,
	saveOverride: ({ attributes }) => {
		setupReducer();
		return <Save {...attributes} />;
	}
} );
