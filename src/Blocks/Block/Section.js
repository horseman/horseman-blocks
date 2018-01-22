import styled from "styled-components";

const StyledSection = styled.div`
	background: ${({ background }) => background};
	border: "1px solid #444";
	padding: "1em";
`;

const Section = (props) => <StyledSection {...props} >Test</StyledSection>;

export default Section;
