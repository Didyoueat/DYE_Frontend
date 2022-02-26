import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeBtnStyles = styled(Link)`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: flex-start;
	margin-left: 24px;
	color: #333333;
	font-weight: 700;
	text-decoration: none;
`;

export const ImgStyles = styled.img`
	height: 28px;
	padding-right: 8px;
`;
