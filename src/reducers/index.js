if(typeof wp.data !== "undefined"){
	const {
		registerSelectors,
		registerReducer,
	} = wp.data;

	const horsemanReducer = ( action ) => {
		switch (action.type) {
			case 'SAVE_STYLES':
				return { styles: action.styles };
				break;
			case 'CLEAR_STYLES':
				return {};
				break;
		}
	};


	registerReducer( 'horsemanBlocks',horsemanReducer);
	registerSelectors( 'horsemanBlocks', {
		getStyles: ( state ) => state.styles,
	} );
}
