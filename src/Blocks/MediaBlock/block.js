import { Picture } from "horseman-components";

const {
    Component,
} = wp.element;

const {
    BlockControls,
    MediaUpload,
} = wp.blocks;

const {
	Button,
    Dashicon,
    Toolbar,
} = wp.components;


class MediaBlock extends Component {
    render(){
        const { setAttributes, attributes } = this.props;
        const onSelectImage = ( media ) => {
            console.log("media",media);
            const attributes = { src: media.url, alt: media.alt, id: media.id, sizes: media.sizes };
            if ( media.caption ) {
                attributes.caption = [ media.caption ];
            }
            setAttributes( attributes );
        }
        const { src, id } = attributes;
        const controls = (
            focus && (
                <BlockControls key="controls">
                    <Toolbar>
						<MediaUpload
							onSelect={ onSelectImage }
							type="image"
							value={ id }
							render={ ( { open } ) => (
								<Button onClick={ open }>
									<Dashicon icon="edit" />
								</Button>
							) }
						/>
                    </Toolbar>
                </BlockControls>
            )
        );
        if(!src){
            return [
                controls,
                <h3>Upload an Image</h3>
            ];
        }

        return [
            controls,
            <Picture src={src} />
        ];

    }
}

export default MediaBlock;
