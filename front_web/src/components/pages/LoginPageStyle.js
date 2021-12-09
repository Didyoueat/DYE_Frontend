import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginPageStyle = styled.div`
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

export const LoginBlock = styled.div`
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

export const LoginInput = styled.input`
	width: 18em;
	height: 3em;
	border: 1px solid #ff5439;
	border-radius: 10px;
	margin: 0.1em;
`;

export const LoginButton = styled.div`
	width: 15.5em;
	height: 3em;
	background: #ff5439;
	border-radius: 10px;
	margin: 0.5em 0em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.login {
		font-weight: 700;
		font-size: 1.15em;
		color: #ffffff;
	}
`;

export const FindPassword = styled(Link)`
	box-sizing: border-box;
	font-size: 0.8em;
	margin-top: 0.1em;
`;
