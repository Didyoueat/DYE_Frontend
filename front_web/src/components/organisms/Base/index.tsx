import React from "react";
import styled from "styled-components";
import Box from "@atoms/Box";
import HomeBtn from "@molecules/HomeBtn";
import TopNav from "@molecules/TopNav";
import SideNav from "@molecules/SideNav";

// interface SBase {
// 	// todo: 미디어쿼리 이용해서 컴포넌트들 크기 조절해줘야함
// }

const StyledDiv = styled.div`
	width: 100%;
	height: 100%;
	background: #f3f1ee;
	overflow: scroll;
`;

interface BaseProps {
	children?: any;
}

const Base = ({ children }: BaseProps) => {
	return (
		<StyledDiv>
			<Box
				type="rowFlex"
				width="1920px"
				height="64px"
				position="absolute"
				zIndex="10"
			>
				<HomeBtn />
				<TopNav />
			</Box>
			<Box
				type="rowFlex"
				width="1920px"
				height="100%"
				padding="64px 0px 0px 0px"
				flexAlign="flex-start"
				position="absolute"
			>
				<SideNav />
				<Box
					type="rowFlex"
					width="1652px"
					height="1016px"
					padding="20px"
					background="#f3f1ee"
				>
					{children}
				</Box>
			</Box>
		</StyledDiv>
	);
};

export default Base;
