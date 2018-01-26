const { __ } = wp.i18n;
const {
  registerBlockType,
  Editable,
  AlignmentToolbar,
  BlockControls,
  BlockAlignmentToolbar,
} = wp.blocks;

/**
  * Register block
 */
export default registerBlockType(
    'horseman/text-block',
    {
			  title: __( 'TextBlock' ),
        category: 'common',
        icon: 'editor-alignleft',
        keywords: [
            __( 'Toolbar' ),
            __( 'Settings' ),
            __( 'Float' ),
        ],
        attributes: {
          message: {
            type: 'array',
            source: 'children',
          },
          alignment: {
            type: 'string',
          },
        },
        edit: ( { attributes, focus, alignment, setAttributes, setFocus } ) => {
          const onChangeMessage = value => {
            setAttributes( { message: value } );
          };
          const onChangeAlignment = value => {
            setAttributes( { alignment: value } );
          };
          return (
						<div>
              {
      					!! focus && (
                  <BlockControls key="controls">
                  	<AlignmentToolbar
                  		value={ attributes.alignment }
                  		onChange={ onChangeAlignment }
                  	/>
                  </BlockControls>
      					)
      				}
              <Editable
                tagName="div"
                multiline="p"
                placeholder={ __( 'Enter your text here...' ) }
                value={ attributes.message }
                style={ { textAlign: attributes.alignment } }
                onChange={ onChangeMessage }
                focus={ focus }
								onFocus={ setFocus }
      				/>
            </div>
          );
        },
        save: attributes => {
          return (
            <div
              style={ { textAlign: props.attributes.alignment } }
            >
              { props.attributes.message }
            </div>
          );
        },

    },
);
