import styled from "styled-components";

export const NotFoundPageStyle = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #ffd9d3;
	font-size: 1em;
	@media (max-width: 425px) {
		font-size: 0.7em;
	}
`;

export const NotFoundBlock = styled.div`
	width: 24em;
	height: 26em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #ffffff;
	border-radius: 20px;
	img {
		width: 6em;
		height: 4em;
	}
`;
