import React from "react";
import Box from "../../atoms/Box";
import HomeBtn from "../../molecules/HomeBtn";
import TopNav from "../../molecules/TopNav";
import SideNav from "../../molecules/SideNav";

interface BaseProps {
	children?: any;
}

const Base = ({ children }: BaseProps) => {
	return (
		<Box type="colFlex" width="100%" height="100%" background="#e5e5e5">
			<Box type="rowFlex" width="100%" borderBottom="1.5px solid #e5e5e5">
				<HomeBtn />
				<TopNav />
			</Box>
			<Box type="rowFlex" width="100%" height="80%" background="#e5e5e5">
				<SideNav />
				{children}
			</Box>
		</Box>
	);
};

export default Base;
