const {
    Component,
} = wp.element;

import { Container } from "horseman-components";

class Section extends Component {
    render(){
		const { padding, width, children } = this.props;
		console.log("Render Children", children);
		const paddingOptions = {
			small: "1em",
			medium: "2em",
			large: "3em",
			none: "0",
		};
        return (
			<div style={{ padding: `${paddingOptions[padding]} 0`, border: "1px solid #eee" }}>
				<Container size={width}>{children}</Container>
			</div>
		);

    }
}

export default Section;
