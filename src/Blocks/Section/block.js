import Section from "./Section";

const {
    Component,
} = wp.element;

const {
	InnerBlocks,
    InspectorControls,
} = wp.blocks;

const {
    SelectControl,
} = InspectorControls;


class Block extends Component {
    render(){
        const { setAttributes, attributes } = this.props;

		const paddingOptions = [
			{ label: "Padding Size...", value: null},
			{ label: "Small", value: "small"},
			{ label: "Medium", value: "medium"},
			{ label: "Large", value: "large"},
			{ label: "None", value: "none"},
		];
		const sizeOptions = [
			{ label: "Width", value: null},
			{ label: "Small", value: "small"},
			{ label: "Medium", value: "medium"},
			{ label: "Large", value: "large"},
			{ label: "None", value: "none"},
		];

		const controls = focus && (<InspectorControls key="inspector">
				<Section>
					<SelectControl
						label="Padding Size"
						onChange={ padding => setAttributes( { padding } ) }
						options={ paddingOptions }
					/>
					<SelectControl
						label="Width..."
						onChange={ width => setAttributes( { width } ) }
						options={ sizeOptions }
					/>
				</Section>
		</InspectorControls>);
        return [
			controls,
			<Section {...attributes}>
				<InnerBlocks
					layouts={{
						normal: { label: 'Normal Width', icon: 'align-center' },
						wide: { label: 'Width Width', icon: 'align-wide' },
					}}
				/>
			</Section>,
		];

    }
}

export default Block;
