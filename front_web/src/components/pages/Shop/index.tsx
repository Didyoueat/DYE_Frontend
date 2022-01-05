import React from "react";
import Box from "../../atoms/Box";
import PageBox from "../../atoms/PageBox";
import Base from "../../organisms/Base";
import ShopInfo from "../../organisms/ShopInfo";
import ShopNotice from "../../organisms/ShopNotice";

const Shop = () => {
	return (
		<Base>
			<PageBox type="rowFlex">
				<ShopInfo />
				<Box width="5%" height="100%" background="#e5e5e5" />
				<ShopNotice />
			</PageBox>
		</Base>
	);
};

export default Shop;
