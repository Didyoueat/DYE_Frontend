import React from "react";
import { useSelector } from "react-redux";
import useShopData from "../../../hooks/useShopData";
import { rootState } from "../../../redux";
import Box from "../../atoms/Box";
import Base from "../../organisms/Base";
import ShopInfo from "../../organisms/ShopInfo";
import ShopNotice from "../../organisms/ShopNotice";

const Shop = () => {
	const info = useSelector((state: rootState) => state.shopReducer.info);
	const test = useShopData(info);
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
				<ShopNotice />
			</Box>
		</Base>
	);
};

export default Shop;
