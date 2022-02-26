import React from "react";
import logo from "@assets/logo.svg";
import Text from "@atoms/Text";
import { HomeBtnStyles, ImgStyles } from "./styles";

const HomeBtn = () => {
	return (
		<HomeBtnStyles to="/">
			<ImgStyles src={logo} alt="home" />
			<Text>사장님 관리 페이지</Text>
		</HomeBtnStyles>
	);
};

export default HomeBtn;
