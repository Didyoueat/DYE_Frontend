import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeBtnStyles = styled(Link)`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: flex-start;
	margin: 1em;
	color: #333333;
	font-weight: 700;
	text-decoration: none;
`;

export const ImgStyles = styled.img`
	width: 4em;
	height: 3em;
	padding-right: 1em;
`;
