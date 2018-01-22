const setupReducer = () => {
	const {
		registerSelectors,
		registerReducer,
	} = wp.data;

	const horsemanReducer = ( state = {}, action ) => {
		switch (action.type) {
			case 'SAVE_STYLES':
				return { styles: action.styles };
				break;
			case 'CLEAR_STYLES':
				return { styles: null};
				break;
			default:
				return state;
				break;
		}
	};


	registerReducer( 'horsemanBlocks', horsemanReducer);
	registerSelectors( 'horsemanBlocks', {
		getStyles: ( state ) => state.styles,
	});
};
export default setupReducer;
