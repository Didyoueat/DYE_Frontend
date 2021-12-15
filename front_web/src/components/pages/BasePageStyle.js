import { Link } from "react-router-dom";
import styled from "styled-components";

export const BaseWrapper = styled.div`
	width: 100%;
	height: 100%;
	background: #e5e5e5;
`;

export const BaseTop = styled.div`
	width: 100%;
	height: 10%;
	background: #ffffff;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1.5px solid #e5e5e5;
	.top-left {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: flex-start;
		margin: 1em;
		img {
			width: 4em;
			height: 3em;
			padding-right: 1em;
		}
		.title {
			font-weight: 700;
			font-size: 1.2em;
		}
	}
	.top-right {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: flex-end;
		margin: 0.3em;
	}
	@media (max-width: 425px) {
		height: 20%;
		font-size: 0.8em;
	}
	@media (max-width: 375px) {
		height: 20%;
		font-size: 0.7em;
	}
	@media (max-width: 320px) {
		height: 20%;
		font-size: 0.6em;
	}
`;

export const BaseLeft = styled.div`
	height: 90%;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: stretch;
	.left-left {
		padding: 1em;
		background: #ffffff;
		display: flex;
		flex-flow: column wrap;
		justify-content: space-around;
	}
	.left-right {
		background: #ffffff;
	}
	.isActive {
		border: 1px solid #ff5439;
		border-radius: 50px;
		color: #ff5439;
	}
	@media (max-width: 425px) {
		height: 80%;
		font-size: 0.8em;
	}
	@media (max-width: 375px) {
		height: 80%;
		font-size: 0.7em;
	}
	@media (max-width: 320px) {
		height: 80%;
		font-size: 0.6em;
	}
`;

export const BaseTopMenu = styled(Link)`
	box-sizing: border-box;
	display: block;
	text-decoration: none;
	color: #333333;
	padding: 0.5em 1em;
	text-align: center;
`;

export const BaseLeftMenu = styled(Link)`
	box-sizing: border-box;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	text-decoration: none;
	padding: 0.5em 1em;
	text-align: center;
	border: 1px solid #ffffff;
	border-radius: 50px;
	color: #333333;
	img {
		width: 2.5em;
		height: 2.5em;
		padding-right: 0.8em;
	}
`;
