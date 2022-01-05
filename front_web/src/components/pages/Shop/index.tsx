import React from "react";
import Box from "../../atoms/Box";
import Base from "../../organisms/Base";
import ShopInfo from "../../organisms/ShopInfo";
import ShopNotice from "../../organisms/ShopNotice";

const Shop = () => {
	return (
		<Base>
			<Box
				type="rowFlex"
				padding="0 0.5em"
				width="80%"
				height="100%"
				background="#e5e5e5"
			>
				<ShopInfo />
				{/* <Box width="5%" height="100%" background="#e5e5e5" /> */}
				<ShopNotice />
			</Box>
		</Base>
	);
};

export default Shop;
