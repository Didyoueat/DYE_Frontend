import React from "react";
import Box from "../../atoms/Box";
import HomeBtn from "../../molecules/HomeBtn";
import TopNav from "../../molecules/TopNav";
import SideNav from "../../molecules/SideNav";

// interface SBase {
// 	// todo: 미디어쿼리 이용해서 컴포넌트들 크기 조절해줘야함
// }

interface BaseProps {
	children?: any;
}

const Base = ({ children }: BaseProps) => {
	return (
		<Box type="colFlex" width="100%" height="100%" background="#e5e5e5">
			<Box type="rowFlex" width="100%">
				<HomeBtn />
				<TopNav />
			</Box>
			<Box type="rowFlex" width="100%" height="85%" background="#e5e5e5">
				<SideNav />
				{children}
			</Box>
		</Box>
	);
};

export default Base;
