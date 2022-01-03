import React from "react";
import Box from "../../atoms/Box";
import Text from "../../atoms/Text";
import HomeBtn from "../../molecules/HomeBtn";
import SideNav from "../../molecules/SideNav";
import TopNav from "../../molecules/TopNav";

const Base = () => {
	return (
		<Box type="colFlex" width="100%" height="100%" background="#e5e5e5">
			<Box type="rowFlex" width="100%" borderBottom="1.5px solid #e5e5e5">
				<HomeBtn></HomeBtn>
				<TopNav></TopNav>
			</Box>
			<Box type="rowFlex" width="100%" height="80%" background="#e5e5e5">
				<SideNav height="inherit"></SideNav>
				<Text type="title">페이지 내용</Text>
			</Box>
		</Box>
	);
};

export default Base;
