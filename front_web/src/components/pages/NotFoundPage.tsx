import React from "react";
import { NotFoundPageStyle, NotFoundBlock } from "./NotFoundPageStyle";
import logo from "../../assets/logo.svg";

const NotFoundPage = () => {
	return (
		<NotFoundPageStyle>
			<NotFoundBlock>
				<img src={logo} alt="dye_logo" />
				<br />
				<h2>404 Not Found</h2>
			</NotFoundBlock>
		</NotFoundPageStyle>
	);
};

export default NotFoundPage;
